import { FunctionComponent } from "react";
import { Service } from "../type";

const ServiceCard: FunctionComponent<{ service: Service }> = ({
  service: { Icon, about, title },
}) => {
  const createMarkup = () => {
    return {
      __html: about,
    };
  };
  return (
    <div className="flex items-center p-2 space-x-4">
      <Icon className="w-12 h-12 text-green" />
      <div className="">
        <h6 className="font-bold">{title}</h6>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

export default ServiceCard;
