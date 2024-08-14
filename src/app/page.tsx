"use client";
import { CameraIcon, UploadIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Camera from "@/components/ui/camera/camera";

export default function HomePage() {
  const [capturedImages, setCapturedImages] = useState<string[]>([]);
  const [showDialog, setShowDialog] = useState(false);
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center justify-center space-y-4 p-8">
          <div className="flex items-center space-x-2">
            <h3 className="text-lg font-medium">Upload or capture photo</h3>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <label
              className="flex cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              htmlFor="file-upload"
            >
              <UploadIcon className="mr-2 h-5 w-5" />
              Upload Files
              <input
                accept="image/*"
                className="sr-only"
                id="file-upload"
                multiple
                type="file"
              />
            </label>
            <Dialog
              open={showDialog}
              onOpenChange={(open) => setShowDialog(open)}
            >
              <DialogTrigger asChild>
                <Button variant="outline">
                  <CameraIcon className="mr-2 h-5 w-5" />
                  Capture Photo
                  <span className="sr-only">Capture</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="h-svh w-svw max-w-full p-0">
                <Camera
                  onClosed={() => {
                    setShowDialog(false);
                  }}
                  onCapturedImages={(images) => {
                    setCapturedImages(images);
                    setShowDialog(false);
                  }}
                />
              </DialogContent>
            </Dialog>
          </div>
          {capturedImages.length > 0 && (
            <div className="grid w-full max-w-md grid-cols-3 gap-4">
              {capturedImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  width={200}
                  height={150}
                  alt="Captured image"
                  className="aspect-video rounded-md object-cover"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
