import { TwButton } from "../components/TWButton";

export default function Test() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="p-4">
        <TwButton intent="primary">Button</TwButton>
      </div>
      <div className="p-4">
        <TwButton intent="secondary">Button</TwButton>
      </div>
      <div className="p-4">
        <TwButton size="medium">Button</TwButton>
      </div>
      <div className="p-4">
        <TwButton size="small">Button</TwButton>
      </div>
    </div>
  );
}
