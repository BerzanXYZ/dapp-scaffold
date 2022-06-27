// Next, React
import { FC, useEffect } from 'react';

// Tailt
import tailt from "tailt"

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

// Components
import { RequestAirdrop } from '../../components/RequestAirdrop';
import pkg from '../../../package.json';

// Store
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';

const Heading1 = tailt.h1`text-center text-5xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]`
const Heading1Span = tailt.span`text-sm font-normal align-top text-slate-700`
const Heading4 = tailt.h4`my-2 text-center md:w-full text-slate-300`

export const HomeView: FC = ({ }) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const balance = useUserSOLBalanceStore((s) => s.balance)
  const { getUserSOLBalance } = useUserSOLBalanceStore()

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58())
      getUserSOLBalance(wallet.publicKey, connection)
    }
  }, [wallet.publicKey, connection, getUserSOLBalance])

  return (

    <div className="p-4 mx-auto md:hero">
      <div className="flex flex-col md:hero-content">
        <Heading1>
          Scaffold Lite <Heading1Span>v{pkg.version}</Heading1Span>
        </Heading1>
        <Heading4>
          <p>Simply the fastest way to get started.</p>
          Next.js, tailwind, wallet, web3.js, and more.
        </Heading4>
        <div className="max-w-md p-6 mx-auto my-2 mockup-code bg-primary">
          <pre data-prefix=">">
            <code className="truncate">Start building on Solana  </code>
          </pre>
        </div>
          <div className="text-center">
          <RequestAirdrop />
          {wallet.publicKey && <p>Public Key: {wallet.publicKey.toBase58()}</p>}
          {wallet && <p>SOL Balance: {(balance || 0).toLocaleString()}</p>}
        </div>
      </div>
    </div>
  );
};
