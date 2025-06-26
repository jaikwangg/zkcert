import { mockUsers } from "@/lib/mockUsers";
import { useUser } from "@/context/UserContext";
import { Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ConnectWallet = () => {
  const { user, setUser } = useUser();

  return (
    <div className="flex flex-col md:flex-row items-center gap-2">
      {user ? (
        <span className="text-sm text-gray-700">Connected: {user.name}</span>
      ) : (
        mockUsers.map((u) => (
          <Button
            key={u.id}
            variant="outline"
            className="flex items-center space-x-2"
            onClick={() => setUser(u)}
          >
            <Wallet className="w-4 h-4" />
            <span>Connect as {u.name}</span>
          </Button>
        ))
      )}
    </div>
  );
};
