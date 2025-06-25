import classNames from "classnames";
import Image from "next/image";
import React from "react";
import { useFeatureStore } from "./Store";
import { HandCoins, Handshake, MonitorSmartphone } from "lucide-react";

type FeatureCardProps = {
  gradient: string;
  children: React.ReactNode;
} & CardProp;

type CardProp = {
  id: string;
};

const FeatureCard = ({ gradient, children, id }: FeatureCardProps) => {
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);

  return (
    <div
      className={classNames(
        `absolute inset-0 md:w-full md:h-full rounded-2xl flex flex-col items-center  justify-center  bg-gradient-to-br opacity-0 transition-opacity`,
        gradient,
        inViewFeature === id ? "opacity-100" : "opacity-0"
      )}
    >
      {children}
    </div>
  );
};

export const Step1 = ({ id }: CardProp) => {
  return (
    <FeatureCard id={id} gradient="from-[#f7f0ff] to-[#a78afe]">
      <Handshake width={80} height={80} />
      <h3 className="font-bold text-xl  text-gray-800">
        Step 1
      </h3>
    </FeatureCard>
  );
};
export const Step2 = ({ id }: CardProp) => {
  return (
    <FeatureCard id={id} gradient="from-[#f5fbff] to-[#addeff]">
      <MonitorSmartphone width={80} height={80} />
      <h3 className="font-bold text-xl text-gray-800">
        Step 2
      </h3>
    </FeatureCard>
  );
};
export const Step3 = ({ id }: CardProp) => {
  return (
    <FeatureCard id={id} gradient="from-[#f5fff7] to-[#adf8ff]">
      <Image src="/customer-care-icon.svg" alt="step2" width={80} height={80} />
      <h3 className="font-bold text-xl text-gray-800">
        Step 3
      </h3>
    </FeatureCard>
  );
};
export const Step4 = ({ id }: CardProp) => {
  return (
    <FeatureCard id={id} gradient="from-[#f7fff5] to-[#adffd8]">
      <HandCoins width={80} height={80} />
      <h3 className="font-bold text-xl text-gray-800">
        Step 4
      </h3>
    </FeatureCard>
  );
};
