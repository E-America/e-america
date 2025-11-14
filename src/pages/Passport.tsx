import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Loader2 } from "lucide-react";

interface ApplicationAnswer {
  answer: string;
  field_id: string;
  question: string;
}

const SUPABASE_URL = "https://xopgoepsswzvzyqrmaaf.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhvcGdvZXBzc3d6dnp5cXJtYWFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMwNTgxMzYsImV4cCI6MjA3ODYzNDEzNn0.jaxVARbwHjNJ_aWOCCyqoHJaV4t7DW5F4QmVheRw_ao";

const Passport = () => {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("id");
  const [data, setData] = useState<ApplicationAnswer[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPassportData = async () => {
      if (!userId) {
        setError("No passport ID provided");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `${SUPABASE_URL}/rest/v1/rpc/get_application_data`,
          {
            method: "POST",
            headers: {
              apikey: SUPABASE_ANON_KEY,
              Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
              "Content-Type": "application/json",
              Prefer: "return=representation",
            },
            body: JSON.stringify({ p_user_id: userId }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch passport data");
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchPassportData();
  }, [userId]);

  const getFieldValue = (fieldId: string) => {
    return data?.find((item) => item.field_id === fieldId)?.answer || "";
  };

  const firstName = getFieldValue("axqAsliRLmn9");
  const lastName = getFieldValue("D8x1hSxsGR3k");
  const location = getFieldValue("baZj8INarqkW");
  const socialProfile = getFieldValue("UzfBtxc5YJ3k");
  const cherishedValue = getFieldValue("54yrIBMTOUC1");
  const admiredLeader = getFieldValue("i025ZqjsgbeJ");
  const governanceMeaning = getFieldValue("23x6XstgAMur");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-32 pb-16">
        {loading ? (
          <div className="flex items-center justify-center min-h-[60vh]">
            <Loader2 className="h-8 w-8 animate-spin text-ea-blue" />
          </div>
        ) : error ? (
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-mono font-bold mb-4 text-foreground">
              Passport Not Found
            </h1>
            <p className="text-muted-foreground">{error}</p>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-ea-blue/10 to-ea-magenta/10 border-2 border-ea-blue/30 rounded-lg p-8 shadow-2xl">
              {/* Header */}
              <div className="text-center mb-8 pb-8 border-b border-ea-blue/20">
                <h1 className="text-4xl font-mono font-bold bg-ea-gradient bg-clip-text text-transparent mb-2">
                  e-AMERICA PASSPORT
                </h1>
                <p className="text-muted-foreground font-mono">
                  Digital Citizenship Certificate
                </p>
              </div>

              {/* Citizen Info */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="mb-6">
                    <label className="block text-sm font-mono text-muted-foreground mb-2">
                      FULL NAME
                    </label>
                    <p className="text-2xl font-mono font-bold text-foreground">
                      {firstName} {lastName}
                    </p>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-mono text-muted-foreground mb-2">
                      LOCATION
                    </label>
                    <p className="text-lg font-mono text-foreground">
                      {location}
                    </p>
                  </div>

                  {socialProfile && (
                    <div className="mb-6">
                      <label className="block text-sm font-mono text-muted-foreground mb-2">
                        SOCIAL PROFILE
                      </label>
                      <a
                        href={socialProfile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ea-blue hover:text-ea-magenta transition-colors font-mono underline break-all"
                      >
                        {socialProfile}
                      </a>
                    </div>
                  )}
                </div>

                <div>
                  <div className="mb-6">
                    <label className="block text-sm font-mono text-muted-foreground mb-2">
                      CHERISHED VALUE
                    </label>
                    <p className="text-lg font-mono text-foreground">
                      {cherishedValue}
                    </p>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-mono text-muted-foreground mb-2">
                      ADMIRED LEADER
                    </label>
                    <p className="text-lg font-mono text-foreground">
                      {admiredLeader}
                    </p>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-mono text-muted-foreground mb-2">
                      GOVERNANCE PHILOSOPHY
                    </label>
                    <p className="text-lg font-mono text-foreground">
                      {governanceMeaning}
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-8 border-t border-ea-blue/20 text-center">
                <p className="text-sm font-mono text-muted-foreground">
                  Passport ID: {userId}
                </p>
                <p className="text-xs font-mono text-muted-foreground mt-2">
                  This passport certifies membership in the digital union of e-America
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Passport;
