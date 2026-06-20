import { useState, useEffect } from "react";

export const BandwidthHeavyComponent = () => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [dataSize, setDataSize] = useState(0);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const downloadHeavyData = async () => {
      setLoading(true);
      setProgress(0);
      setUserData([]);

      try {
        const response = await fetch(
          "https://cors-anywhere.herokuapp.com/https://fetch-stream-test.now.sh/20mb.json",
        );

        if (!response.ok) throw new Error("Network response failed");

        const totalBytes =
          Number(response.headers.get("Content-Length")) || 20971520;
        const reader = response.body.getReader();
        let receivedBytes = 0;
        let chunks = [];

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          chunks.push(value);
          receivedBytes += value.length;

          const currentProgress = Math.round(
            (receivedBytes / totalBytes) * 100,
          );
          setProgress(currentProgress);
          setDataSize((receivedBytes / 1024 / 1024).toFixed(2));
        }

        const allChunks = new Uint8Array(receivedBytes);
        let position = 0;
        for (let chunk of chunks) {
          allChunks.set(chunk, position);
          position += chunk.length;
        }

        const decodedText = new TextDecoder("utf-8").decode(allChunks);
        const finalJson = JSON.parse(decodedText);

        setUserData(finalJson.slice(0, 100));
      } catch (error) {
        console.error("Bandwidth stream failed:", error);
      } finally {
        setLoading(false);
      }
    };

    downloadHeavyData();
  }, []); // Empty dependency array means "run once on mount"

  return (
    <div
      style={{
        padding: "20px",
        border: "2px dashed #007acc",
        borderRadius: "8px",
        marginTop: "20px",
      }}
    >
      <h3>Network Bandwidth Heavy Simulator</h3>
      <p style={{ color: "#666" }}>
        Status:{" "}
        {loading ? "⏬ Streaming 20MB data file..." : "✅ Stream Complete"}
      </p>

      {loading && (
        <div style={{ marginTop: "15px" }}>
          <div
            style={{
              width: "100%",
              background: "#eee",
              height: "20px",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${progress}%`,
                background: "#4caf50",
                height: "100%",
                transition: "width 0.1s ease",
              }}
            />
          </div>
          <p style={{ fontSize: "14px", color: "#555" }}>
            Downloaded: <strong>{dataSize} MB</strong> ({progress}%)
          </p>
        </div>
      )}

      {userData.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <strong style={{ color: "green" }}>
            ✓ Success! Loaded into memory.
          </strong>
          <ul
            style={{
              maxHeight: "150px",
              overflowY: "auto",
              fontSize: "12px",
              marginTop: "10px",
            }}
          >
            {userData.map((item, i) => (
              <li key={i}>{item.name || `Record ${i}`}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BandwidthHeavyComponent;
