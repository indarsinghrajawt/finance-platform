export default function TradingChart() {
    return (
        <iframe
            title="TradingView Chart"
            src="https://s.tradingview.com/widgetembed/?symbol=NASDAQ:AAPL&interval=D&theme=dark&style=1&toolbarbg=f1f3f6"
            width="100%"
            height="400"
            frameBorder="0"
            scrolling="no"
        />
    );
}