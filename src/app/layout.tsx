import { CameraProvider } from "@/components/ui/camera/camera-provider";
import "@/styles/globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Test WebView and WebCame",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <h1 className='text-center text-3xl mt-4'>Testing Webcam on Android</h1>
        <CameraProvider>{children}</CameraProvider>
      </body>
    </html>
  );
}
