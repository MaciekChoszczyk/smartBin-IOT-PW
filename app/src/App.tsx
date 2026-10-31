import { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from './firebase';
import { Lock, Unlock, RefreshCw } from 'lucide-react';

export default function App() {
  const [fillPercent, setFillPercent] = useState<number | null>(null);
  const [isLidOpen, setIsLidOpen] = useState<boolean>(false);
  const [isConnected, setIsConnected] = useState<boolean>(false);

useEffect(() => {

    const fillRef = ref(db, 'fillPercent');
    const lidRef = ref(db, 'isLidOpen');

    onValue(fillRef, (snapshot) => {
      setFillPercent(snapshot.val() ?? 0);
      setIsConnected(true);
    });

    onValue(lidRef, (snapshot) => {
      setIsLidOpen(snapshot.val() ?? false);
    });
  }, []);


 return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-xl flex flex-col gap-6">
        <div className="flex justify-between items-center border-b border-gray-700 pb-3">
          <div className="flex items-center gap-2">
            <h1 className="text-base font-semibold text-gray-200">Smart Bin</h1>
          </div>
          <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${isConnected ? 'bg-emerald-900/50 text-emerald-400 border border-emerald-800' : 'bg-gray-700 text-gray-400'}`}>
            {isConnected ? "Online" : "Connecting..."}
          </span>
        </div>

        <div className="flex flex-col items-center text-center py-4">
          <span className="text-xs uppercase tracking-wider text-gray-400 mb-1">Fill Level</span>
          <div className="text-4xl font-bold tracking-tight text-white mb-3">
            {fillPercent !== null ? `${fillPercent}%` : <RefreshCw className="w-6 h-6 animate-spin text-gray-500" />}
          </div>
          <div className="w-full bg-gray-700 h-2.5 rounded-full overflow-hidden">
            <div 
              className="bg-emerald-500 h-full transition-all duration-300" 
              style={{ width: `${fillPercent ?? 0}%` }}
            />
          </div>
        </div>


        <div className="flex items-center justify-between bg-gray-900/50 rounded-xl p-4 border border-gray-700/50">
          <div className="flex items-center gap-3">
            {isLidOpen ? (
              <Unlock className="w-5 h-5 text-amber-400" />
            ) : (
              <Lock className="w-5 h-5 text-gray-400" />
            )}
            <div>
              <p className="text-xs text-gray-400">Status</p>
              <p className="text-sm font-medium">{isLidOpen ? "Open" : "Closed"}</p>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  );
}