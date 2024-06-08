import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Leverage Edu Uniconnect ",
  description: "UniConnect is India’s biggest virtual education fair through which you can interact with the top universities of the globe in the comfort of your home.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      {/* <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        /> */}
      </head>
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
