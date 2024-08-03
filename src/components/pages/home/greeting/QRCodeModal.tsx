"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { QrCode } from "lucide-react";

const QRCodeModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"ghost"}
          className="rounded-full shadow-lg p-3 flex items-center justify-center border w-fit h-fit"
        >
          <QrCode className="h-10 w-10" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col items-center justify-center gap-8">
          <span className="font-bold text-base text-center">
            Show the QR Code below to the cashier
          </span>
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=HelloWorld"
            alt="QR Code"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QRCodeModal;
