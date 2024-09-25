import { useState, useCallback } from 'react';
import { ReactFlow, Controls, Background, applyEdgeChanges, applyNodeChanges } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialEdges = [
  { id: '1-2', source: '1', target: '2', animated: true },
  { id: '2-3', source: '2', target: '3', animated: true },
];

const initialNodes = [
  {
    id: '1',
    data: { label: 'A' },
    position: { x: 100, y: 100 },
  },
  {
    id: '2',
    data: { label: 'B' },
    position: { x: 200, y: 200 },
  },
  {
    id: '3',
    data: { label: 'C' },
    position: { x: 300, y: 300 },
  },
];

const Diagram = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [],
  );

  return (
    <div style={{ height: '100%' }}>
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        colorMode="dark"
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default Diagram;
