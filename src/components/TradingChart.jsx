import { useEffect, useRef } from "react";

export default function TradingChart() {
    const container = useRef(null);

    useEffect(() => {
        if (!container.current) return;

        container.current.innerHTML = "";

        const script = document.createElement("script");

        script.src =
            "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";

        script.type = "text/javascript";
        script.async = true;

        script.innerHTML = JSON.stringify({
            autosize: true,
            symbol: "NASDAQ:AAPL",
            interval: "D",
            timezone: "Etc/UTC",
            theme: "dark",
            style: "1",
            locale: "en",
            allow_symbol_change: true,
            hide_top_toolbar: false,
            save_image: true,
        });

        container.current.appendChild(script);
    }, []);

    return (
        <div
            className="tradingview-widget-container h-[500px]"
            ref={container}
        >
            <div className="tradingview-widget-container__widget h-full"></div>
        </div>
    );
}