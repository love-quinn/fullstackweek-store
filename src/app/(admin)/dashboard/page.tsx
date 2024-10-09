import { Badge } from "@/components/ui/badge";
import { PackageIcon } from "lucide-react";

const DashboardPage = () => {
  return (
    <div className="flex w-full flex-col gap-10 p-10">
      <Badge variant="heading">
        <PackageIcon size={18} />
        Dashboard
      </Badge>

      
      </div>
  );
};

export default DashboardPage;
