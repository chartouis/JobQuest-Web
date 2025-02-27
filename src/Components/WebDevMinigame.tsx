import React, { useState, useCallback, useRef } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";

import { Link } from "react-router-dom";

// Utility to detect touch devices
export const isTouchDevice = () => {
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.maxTouchPoints > 0
  );
};

// Multi-backend setup to handle both mouse and touch
const MultiBackend = isTouchDevice() ? TouchBackend : HTML5Backend;

export const ItemTypes = {
  HEADER: "header",
  PARAGRAPH: "paragraph",
  IMAGE: "image",
  BUTTON: "button",
  SIDEBAR: "sidebar",
};

// ---- Interfaces ----
interface DroppedItem {
  id: string;
  type: string;
  text: string;
  index?: number;
}

interface DraggableElementProps {
  type: string;
  text: string;
  color: string;
}

interface DroppedElementProps {
  item: DroppedItem;
  index: number;
  moveItem: (dragIndex: number, hoverIndex: number) => void;
  onRemove: () => void;
  onTextChange: (id: string, newText: string) => void;
}

interface ScoreTrackerProps {
  score: number;
  maxScore: number;
  isComplete: boolean;
}

interface DesignElement {
  type: string;
  text?: string;
}

// ---- Components ----

// Draggable Element (Toolbox)
const DraggableElement: React.FC<DraggableElementProps> = ({
  type,
  text,
  color,
}) => {
  const dragRef = useRef<HTMLDivElement | null>(null);
  const [{ isDragging }, drag] = useDrag(() => ({
    type,
    item: { type, text, id: `new-${Date.now()}` },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    options: {
      dropEffect: 'copy'
    }
  }));

  drag(dragRef);

  return (
    <div
      ref={dragRef}
      className={`p-3 mb-2 rounded-lg text-center cursor-move ${color} ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      {text}
    </div>
  );
};

// DroppedElement with Drag & Drop functionality
const DroppedElement: React.FC<DroppedElementProps> = ({
  item,
  index,
  moveItem,
  onRemove,
  onTextChange,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag] = useDrag({
    type: "DROPPED_ITEM",
    item: () => ({ id: item.id, index }),
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: "DROPPED_ITEM",
    hover: (draggedItem: { id: string; index: number }, monitor) => {
      if (!ref.current) return;
      const dragIndex = draggedItem.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) return;

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = (clientOffset?.y || 0) - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

      // Time to actually perform the action
      moveItem(dragIndex, hoverIndex);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      draggedItem.index = hoverIndex;
    },
  });

  drag(drop(ref));

  const getElementStyle = (type: string) => {
    switch (type) {
      case ItemTypes.HEADER:
        return "bg-blue-100 text-blue-800 p-4 text-2xl font-bold";
      case ItemTypes.PARAGRAPH:
        return "bg-gray-100 text-gray-800 p-4";
      case ItemTypes.IMAGE:
        return "bg-yellow-100 p-2";
      case ItemTypes.BUTTON:
        return "bg-green-100 text-green-800 py-2 px-4 rounded-lg inline-block";
      case ItemTypes.SIDEBAR:
        return "bg-purple-100 text-purple-800 p-4 h-full";
      default:
        return "";
    }
  };

  const renderContent = (item: DroppedItem) => {
    if (item.type === ItemTypes.IMAGE) {
      return (
        <img
          src="/api/placeholder/200/150"
          alt="Placeholder"
          className="w-full"
        />
      );
    }

    return (
      <div
        contentEditable
        suppressContentEditableWarning
        className="user-select-none relative"
        style={{ userSelect: "none" }}
        onBlur={(e) =>
          onTextChange(item.id, e.currentTarget.textContent || item.text)
        }
        dangerouslySetInnerHTML={{ __html: item.text }}
      />
    );
  };

  return (
    <div
      ref={ref}
      className={`relative mb-4 ${getElementStyle(item.type)} ${
        isDragging ? "opacity-50" : "opacity-100"
      } cursor-move`}
    >
      {renderContent(item)}
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent event bubbling
          onRemove();
        }}
        className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
      >
        ×
      </button>
    </div>
  );
};

// Reference Design Component
const ReferenceDesign: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100">
      <h3 className="text-xl font-bold text-[#07273c] mb-4">
        Reference Design
      </h3>
      <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
        <div className="bg-blue-100 text-blue-800 p-4 text-2xl font-bold mb-4">
          My First Website
        </div>

        <div className="mb-4">
          <img
            src="/api/placeholder/500/200"
            alt="Hero image"
            className="w-full rounded-lg"
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <div className="bg-gray-100 text-gray-800 p-4 mb-4">
              Welcome to my website! This is where I showcase my projects and
              share my thoughts on web development.
            </div>

            <button className="bg-green-100 text-green-800 py-2 px-4 rounded-lg inline-block">
              Learn More
            </button>
          </div>

          <div className="bg-purple-100 text-purple-800 p-4 h-full">
            <h4 className="font-bold mb-2">Links</h4>
            <ul className="space-y-2">
              <li>Home</li>
              <li>About</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// Score Tracker Component
const ScoreTracker: React.FC<ScoreTrackerProps> = ({
  score,
  maxScore,
  isComplete,
}) => {
  const percentage = Math.round((score / maxScore) * 100);

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
      <h3 className="text-xl font-bold text-[#07273c] mb-4">Your Progress</h3>

      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-[#07273c]">Score</span>
          <span className="text-sm font-medium text-[#07273c]">
            {percentage}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-[#3fe881] h-2.5 rounded-full"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>

      <div className="text-3xl font-bold text-[#07273c]">
        {score}/{maxScore}
      </div>

      {isComplete && (
        <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-lg">
          <span className="font-bold">Congratulations!</span> You've completed
          the challenge.
        </div>
      )}

      {!isComplete && score > 0 && (
        <div className="mt-4 p-3 bg-blue-100 text-blue-800 rounded-lg">
          <span className="font-bold">Keep going!</span> You're making progress.
        </div>
      )}
    </div>
  );
};

// DropZone Component
const DropZone: React.FC<{
  children: React.ReactNode;
  onDrop: (item: any) => void;
}> = ({ children, onDrop }) => {
  const dropRef = useRef<HTMLDivElement | null>(null);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: Object.values(ItemTypes),
    drop: (item: any) => {
      onDrop(item);
      return undefined;
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  drop(dropRef);

  return (
    <div
      ref={dropRef}
      className={`${
        isOver ? "bg-blue-50 border-blue-300" : "bg-gray-50 border-gray-200"
      } border-2 border-dashed rounded-lg p-4 min-h-[400px]`}
    >
      {children}
      {isOver && <div className="text-blue-500 text-center">Drop here</div>}
    </div>
  );
};

// Main Web Dev Minigame Component
const WebDevMinigame: React.FC = () => {
  const [droppedItems, setDroppedItems] = useState<DroppedItem[]>([]);
  const [score, setScore] = useState<number>(0);
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const maxScore = 100;

  // Define target design elements
  const targetDesign = {
    elements: [
      { type: ItemTypes.HEADER, text: "My First Website" },
      { type: ItemTypes.IMAGE },
      { type: ItemTypes.PARAGRAPH, text: "Welcome to my website!" },
      { type: ItemTypes.BUTTON, text: "Learn More" },
      { type: ItemTypes.SIDEBAR, text: "Links" },
    ] as DesignElement[],
  };

  const calculateScore = useCallback(
    (items: DroppedItem[]) => {
      const targetElements = targetDesign.elements;
      let matchScore = 0;

      // Score based on matching elements
      for (const target of targetElements) {
        const found = items.find((item) => item.type === target.type);
        if (found) {
          matchScore += 15; // Base points for correct type

          // Bonus for correct text if applicable
          if (target.text && found.text && found.text.includes(target.text)) {
            matchScore += 5;
          }
        }
      }

      matchScore = Math.min(matchScore, maxScore);
      setScore(matchScore);

      if (matchScore >= 80) {
        setIsComplete(true);
      }
    },
    [targetDesign.elements]
  );

  const handleDrop = useCallback(
    (item: any) => {
      setDroppedItems((prev) => {
        const newItems = [
          ...prev,
          { ...item, text: item.text || `${item.type} element` },
        ];
        calculateScore(newItems);
        return newItems;
      });
    },
    [calculateScore]
  );

  const handleRemove = useCallback(
    (id: string) => {
      setDroppedItems((prev) => {
        const newItems = prev.filter((item) => item.id !== id);
        calculateScore(newItems);
        return newItems;
      });
    },
    [calculateScore]
  );

  const handleTextChange = useCallback(
    (id: string, newText: string) => {
      setDroppedItems((prev) => {
        const newItems = prev.map((item) =>
          item.id === id ? { ...item, text: newText } : item
        );
        calculateScore(newItems);
        return newItems;
      });
    },
    [calculateScore]
  );

  const moveItem = useCallback((dragIndex: number, hoverIndex: number) => {
    setDroppedItems((prevItems) => {
      const newItems = [...prevItems];
      const [movedItem] = newItems.splice(dragIndex, 1);
      newItems.splice(hoverIndex, 0, movedItem);
      return newItems;
    });
  }, []);

  return (
    <DndProvider backend={MultiBackend}>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="bg-[#07273c] p-4 text-white">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold">
                Job<span className="text-[#3fe881]">Quest</span>
              </span>
              <Link to="/">
                <button className="px-4 py-2 text-sm bg-[#3fe881] text-[#07273c] font-bold rounded-lg hover:opacity-80">
                  Back to Menu
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-8">
          {/* Hero Section */}
          <div className="bg-[#3fe881] bg-opacity-20 py-8 rounded-xl mb-8">
            <div className="container mx-auto px-6">
              <h1 className="text-4xl font-bold text-[#07273c] mb-4 text-center">
                Web Developer Challenge
              </h1>
              <p className="text-[#07273c] text-lg max-w-3xl mx-auto text-center">
                Build a webpage by arranging elements to match the design. Drag
                and drop elements to create your layout.
              </p>
            </div>
          </div>

          {/* Mobile Instructions Alert */}
          {isTouchDevice() && (
            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6">
              <p className="font-bold">Mobile Device Detected</p>
              <p>Tap and hold on elements to drag them. Release to drop.</p>
            </div>
          )}

          {/* Game Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Instructions & Reference */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <h2 className="text-2xl font-bold text-[#07273c] mb-4">
                  Instructions
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    1. Drag elements from the toolbox on the right.
                  </p>
                  <p className="text-gray-700">
                    2. Drop them into the canvas to build your page.
                  </p>
                  <p className="text-gray-700">
                    3. Click on any text to edit it.
                  </p>
                  <p className="text-gray-700">
                    4. Drag elements within the canvas to reorder them.
                  </p>
                  <p className="text-gray-700">
                    5. Your score increases as you match the reference design.
                  </p>
                </div>
              </div>

              <ReferenceDesign />
              <ScoreTracker
                score={score}
                maxScore={maxScore}
                isComplete={isComplete}
              />
            </div>

            {/* Game Canvas */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold text-[#07273c] mb-4">
                Build Your Page
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Toolbox */}
                <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100">
                  <h3 className="text-xl font-bold text-[#07273c] mb-4">
                    Elements
                  </h3>
                  <DraggableElement
                    type={ItemTypes.HEADER}
                    text="Header"
                    color="bg-blue-100 text-blue-800"
                  />
                  <DraggableElement
                    type={ItemTypes.PARAGRAPH}
                    text="Paragraph"
                    color="bg-gray-100 text-gray-800"
                  />
                  <DraggableElement
                    type={ItemTypes.IMAGE}
                    text="Image"
                    color="bg-yellow-100 text-yellow-800"
                  />
                  <DraggableElement
                    type={ItemTypes.BUTTON}
                    text="Button"
                    color="bg-green-100 text-green-800"
                  />
                  <DraggableElement
                    type={ItemTypes.SIDEBAR}
                    text="Sidebar"
                    color="bg-purple-100 text-purple-800"
                  />
                </div>

                {/* Canvas */}
                <div className="md:col-span-3">
                  <DropZone onDrop={handleDrop}>
                    {droppedItems.length === 0 ? (
                      <div className="text-gray-400 text-center py-12">
                        Drag elements from the toolbox and drop them here to
                        build your page
                      </div>
                    ) : (
                      droppedItems.map((item, index) => (
                        <DroppedElement
                          key={item.id}
                          item={item}
                          index={index}
                          moveItem={moveItem}
                          onRemove={() => handleRemove(item.id)}
                          onTextChange={handleTextChange}
                        />
                      ))
                    )}
                  </DropZone>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-[#07273c] py-8 rounded-xl mt-12">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Continue Your Web Development Journey
              </h2>
              <p className="text-white text-lg max-w-2xl mx-auto mb-6">
                Ready to learn more about becoming a web developer? Explore our
                comprehensive resources and hands-on tutorials.
              </p>
              <Link to="https://roadmap.sh/frontend">
                <button className="px-6 py-2 bg-[#3fe881] text-[#07273c] font-bold rounded-lg hover:opacity-80 transition-colors shadow-lg">
                  Explore More Tasks
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-100 py-6 mt-12">
          <div className="container mx-auto px-6 flex justify-between items-center">
            <span className="text-[#07273c] font-bold text-xl">
              Job<span className="text-[#3fe881]">Quest</span>
            </span>
            <p className="text-gray-600">
              © 2025 JobQuest. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </DndProvider>
  );
};

export default WebDevMinigame;