type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  // NOTE: LINEミニアプリの審査時に余白の調整が必要であれば適用する
  // @see https://developers.line.biz/ja/docs/line-mini-app/design/landscape/#for-normal-mode
  <div className="w-full">{children}</div>
);
Layout.displayName = "Layout";
