import QRCodeModal from "./QRCodeModal";

const Greeting = () => {
  return (
    <div className="rounded-lg bg-white p-4 shadow-lg flex flex-col gap-2">
      <span>Good Afternoon,</span>
      <span className="font-bold">Guntur</span>
      <div className="flex items-center gap-1">
        <QRCodeModal />
        <div className="ml-2 border-l border-dashed pl-2 w-full flex items-center flex-col gap-1">
          <div className="flex w-full items-center justify-between">
            <span className="text-sm">Saldo</span>
            <span className="text-sm font-semibold">Rp279.000</span>
          </div>
          <div className="flex w-full items-center justify-between">
            <span className="text-sm">Points</span>
            <span className="text-sm text-green-500">2.500</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
