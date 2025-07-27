export const metadata = {
  title: "vgifai.com",
  description: "Wonderful AI from Human to Human",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
