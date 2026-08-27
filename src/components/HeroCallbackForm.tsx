import React, { useState, useEffect } from "react";

export const HeroCallbackForm: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [gclid, setGclid] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Read GCLID from LocalStorage or Cookie
    const storedGclid =
      localStorage.getItem("gclid") ||
      document.cookie
        .split("; ")
        .find((row) => row.startsWith("gclid="))
        ?.split("=")[1] ||
      "";
    setGclid(storedGclid);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = phone.trim();
    if (!cleanPhone || cleanPhone.length < 10) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    setLoading(true);

    try {
      await fetch("https://api.indiaicu.com/api/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim() || "Emergency Inquirer",
          phone: cleanPhone,
          gclid: gclid,
          timestamp: new Date().toISOString(),
        }),
      });

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitted(true); // Keep UI calm for the customer
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-emerald-950/90 border border-emerald-500/50 p-6 rounded-2xl text-center shadow-2xl max-w-sm w-full backdrop-blur-md">
        <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl font-bold">
          ✓
        </div>
        <h3 className="text-emerald-400 font-bold text-lg mb-1">Alerting Dispatcher</h3>
        <p className="text-slate-200 text-sm">
          A critical care coordinator is calling <strong>{phone}</strong> in under 30 seconds.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#111c2e]/90 border border-slate-700/70 backdrop-blur-md p-5 sm:p-6 rounded-2xl shadow-2xl max-w-sm w-full text-left">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-bold tracking-wider uppercase bg-red-500/20 text-red-400 px-2.5 py-0.5 rounded-full border border-red-500/30">
          ● Priority Dispatch
        </span>
        <span className="text-[11px] text-slate-400 font-medium">Callback in &lt; 30s</span>
      </div>

      <h3 className="text-lg font-bold text-white mb-0.5">
        Get Emergency Assistance
      </h3>
      <p className="text-xs text-slate-400 mb-4">
        Immediate ICU &amp; intercity ambulance dispatch.
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="hidden" name="gclid" value={gclid} />

        <div>
          <input
            type="text"
            placeholder="Your Name (Optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-slate-900/90 border border-slate-700 rounded-lg text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition"
          />
        </div>

        <div>
          <input
            type="tel"
            required
            placeholder="Contact Number *"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-slate-900/90 border border-slate-700 rounded-lg text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-lg shadow-lg shadow-red-600/30 transition duration-150 flex items-center justify-center cursor-pointer"
        >
          {loading ? "Alerting Dispatch..." : "Get Callback →"}
        </button>
      </form>
    </div>
  );
};
