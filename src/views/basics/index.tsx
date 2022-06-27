import { FC } from "react";
import tailt from "tailt"
import { SignMessage } from '../../components/SignMessage';
import { SendTransaction } from '../../components/SendTransaction';
import { useWallet } from "@solana/wallet-adapter-react";

const PubKeyP = tailt.p`text-lg text-white`

export const BasicsView: FC = ({ }) => {
  const {publicKey} = useWallet()

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
          {publicKey && <PubKeyP>Public Key: {publicKey.toBase58()}</PubKeyP>}
        </div>
      </div>
    </div>
  );
};
