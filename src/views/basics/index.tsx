
import { FC } from "react";
import { SignMessage } from '../../components/SignMessage';
import { SendTransaction } from '../../components/SendTransaction';

export const BasicsView: FC = ({ }) => {

  return (
<div className="p-4 mx-auto md:hero">
      <div className="flex flex-col md:hero-content">
        <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
          Basics
        </h1>
        {/* CONTENT GOES HERE */}
        <div className="text-center">
          <SignMessage/>
          <SendTransaction />
        </div>
      </div>
    </div>
  );
};
