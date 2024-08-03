import { FC } from "react";
import QRCodeModal from "./QRCodeModal";

type Props = {
  data: any;
};

const Greeting: FC<Props> = ({ data }) => {
  return (
    <div className="rounded-lg bg-white p-4 shadow-lg flex flex-col gap-2">
      <span>{data.greeting},</span>
      <span className="font-bold">{data.name}</span>
      <div className="flex items-center gap-1">
        <QRCodeModal data={data} />
        <div className="ml-2 border-l border-dashed pl-2 w-full flex items-center flex-col gap-1">
          <div className="flex w-full items-center justify-between">
            <span className="text-sm">Saldo</span>
            <span className="text-sm font-semibold">
              Rp{data.saldo.toLocaleString("de-DE")}
            </span>
          </div>
          <div className="flex w-full items-center justify-between">
            <span className="text-sm">Points</span>
            <span className="text-sm text-green-500">
              {data.point.toLocaleString("de-DE")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
