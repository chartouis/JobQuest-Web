// DragDropBuilder.tsx
import React, { useState, useCallback, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { v4 as uuidv4 } from "uuid";

// Define item types for drag and drop
const ItemTypes = {
  HEADER: "header",
  PARAGRAPH: "paragraph",
  IMAGE: "image",
  BUTTON: "button",
  SIDEBAR: "sidebar",
};

interface DragDropBuilderProps {
  targetDesign: any;
  onLayoutChange: (design: any) => void;
}

// Component for draggable elements in the toolbox
const DraggableElement = ({
  type,
  text,
  color,
}: {
  type: string;
  text: string;
  color: string;
}) => {
  const dragRef = useRef<HTMLDivElement>(null);
  const [{ isDragging }] = useDrag(() => ({
    type,
    item: { type, id: uuidv4(), text },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

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

// Component for the dropzone (canvas)
const DropZone = ({
  children,
  onDrop,
  className,
}: {
  children: React.ReactNode;
  onDrop: (item: any) => void;
  className?: string;
}) => {
  const dropRef = useRef<HTMLDivElement | null>(null);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: [
      ItemTypes.HEADER,
      ItemTypes.PARAGRAPH,
      ItemTypes.IMAGE,
      ItemTypes.BUTTON,
      ItemTypes.SIDEBAR,
    ],
    drop: (item) => {
      onDrop(item);
      return undefined;
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  drop(dropRef)
  return (
    <div
      ref={dropRef}
      className={`${className} ${
        isOver ? "bg-blue-50 border-blue-300" : "bg-gray-50 border-gray-200"
      } border-2 border-dashed rounded-lg p-4 min-h-screen`}
    >
      {children}
      {isOver && <div className="text-blue-500 text-center">Drop here</div>}
    </div>
  );
};

// Dropped element on the canvas
const DroppedElement = ({
  item,
  onRemove,
}: {
  item: any;
  onRemove: () => void;
}) => {
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
        return "bg-purple-100 text-purple-800 p-4 min-h-full";
      default:
        return "";
    }
  };

  const renderContent = (item: any) => {
    if (item.type === ItemTypes.IMAGE) {
      return (
        <img
          src="/api/placeholder/200/150"
          alt="Placeholder"
          className="w-full"
        />
      );
    }
    return item.text || `${item.type} element`;
  };

  return (
    <div className={`relative mb-4 ${getElementStyle(item.type)}`}>
      {renderContent(item)}
      <button
        onClick={onRemove}
        className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
      >
        ×
      </button>
    </div>
  );
};

const DragDropBuilder: React.FC<DragDropBuilderProps> = ({
  
  onLayoutChange,
}) => {
  const [droppedItems, setDroppedItems] = useState<any[]>([]);

  const handleDrop = useCallback(
    (item: any) => {
      setDroppedItems((prev) => {
        const newItems = [...prev, item];
        // Notify parent about layout changes
        onLayoutChange({ elements: newItems });
        return newItems;
      });
    },
    [onLayoutChange]
  );

  const handleRemove = useCallback(
    (id: string) => {
      setDroppedItems((prev) => {
        const newItems = prev.filter((item) => item.id !== id);
        // Notify parent about layout changes
        onLayoutChange({ elements: newItems });
        return newItems;
      });
    },
    [onLayoutChange]
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* Toolbox */}
      <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100">
        <h3 className="text-xl font-bold text-[#07273c] mb-4">Elements</h3>
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
        <h3 className="text-xl font-bold text-[#07273c] mb-4">Canvas</h3>
        <DropZone onDrop={handleDrop} className="bg-white rounded-xl shadow-md">
          {droppedItems.length === 0 ? (
            <div className="text-gray-400 text-center py-12">
              Drag elements from the toolbox and drop them here to build your
              page
            </div>
          ) : (
            droppedItems.map((item) => (
              <DroppedElement
                key={item.id}
                item={item}
                onRemove={() => handleRemove(item.id)}
              />
            ))
          )}
        </DropZone>
      </div>
    </div>
  );
};

export default DragDropBuilder;
