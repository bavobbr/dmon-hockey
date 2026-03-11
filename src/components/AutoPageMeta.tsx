import { useLocation } from "react-router-dom";
import PageMeta from "./PageMeta";
import { PAGE_META } from "@/config/pageMeta";

export default function AutoPageMeta() {
  const { pathname } = useLocation();
  const meta = PAGE_META[pathname];

  if (!meta) return null;

  return <PageMeta title={meta.title} description={meta.description} path={pathname} />;
}
