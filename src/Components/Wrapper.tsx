interface WrapperProps {
  children: React.ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
  return <div className="bg-[#3fe881] w-screen h-screen">{children}</div>;
}
