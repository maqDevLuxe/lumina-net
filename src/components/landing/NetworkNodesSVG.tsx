const NetworkNodesSVG = () => {
  const nodes = [
    { cx: 100, cy: 80 }, { cx: 250, cy: 150 }, { cx: 400, cy: 60 },
    { cx: 550, cy: 180 }, { cx: 700, cy: 90 }, { cx: 150, cy: 250 },
    { cx: 350, cy: 280 }, { cx: 500, cy: 320 }, { cx: 650, cy: 230 },
    { cx: 800, cy: 300 }, { cx: 200, cy: 380 }, { cx: 450, cy: 400 },
  ];

  const lines = [
    [0,1],[1,2],[2,3],[3,4],[0,5],[1,6],[2,6],[3,7],[4,8],[5,6],
    [6,7],[7,8],[8,9],[5,10],[6,10],[7,11],[8,11],[9,11],[10,11],
  ];

  return (
    <svg viewBox="0 0 900 450" className="w-full h-full opacity-60" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(185, 90%, 50%)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="hsl(220, 80%, 55%)" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      {lines.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].cx} y1={nodes[a].cy}
          x2={nodes[b].cx} y2={nodes[b].cy}
          stroke="url(#lineGrad)" strokeWidth="1"
          strokeDasharray="200" strokeDashoffset="200"
          className="animate-dash"
          style={{ animationDelay: `${i * 0.1}s` }}
        />
      ))}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.cx} cy={n.cy} r="6" fill="hsl(185, 90%, 50%)" filter="url(#glow)" opacity="0.8">
            <animate attributeName="r" values="5;8;5" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;1;0.5" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
          </circle>
          <circle cx={n.cx} cy={n.cy} r="2" fill="hsl(185, 90%, 80%)" />
        </g>
      ))}
    </svg>
  );
};

export default NetworkNodesSVG;
