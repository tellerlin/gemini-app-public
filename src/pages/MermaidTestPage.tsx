import React from 'react';
import { MermaidDiagram } from '../components/MermaidDiagram';

const testFlowchart = `graph TD
    A["User"] --> B{"Open Shopping Website/App"}
    B --> C{"Browse Products"}
    C --> D{"Select Products & Add to Cart"}
    D --> E{"Confirm Cart"}
    E --> F{"Login/Register"}
    F -- No --> G["Fill Delivery Address/Select Existing"]
    G --> H{"Choose Payment Method"}
    F -- Yes --> H
    H --> I{"Complete Payment"}
    I --> J["Merchant Process Order"]
    J --> K["Product Outbound/Shipping"]
    K --> L["Logistics Delivery"]
    L --> M{"User Receives Goods"}
    M --> N["Order Complete/Review"]`;

export function MermaidTestPage() {
  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>
        Mermaid Responsive Test Page
      </h1>
      
      <div style={{ marginBottom: '30px' }}>
        <h2>Fixed Optimized Component Test</h2>
        <p style={{ color: '#666', marginBottom: '20px' }}>
          This component has fixed the infinite loop issue and added responsive debounce functionality.
        </p>
        
        <MermaidDiagram
          code={testFlowchart}
          title="Shopping Process Diagram - Fixed Version"
          enableExport={true}
        />
      </div>

      <div style={{ backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '8px' }}>
        <h3>Fixed Issues:</h3>
        <ul style={{ marginTop: '10px' }}>
          <li>✅ Fixed infinite loop state update issue</li>
          <li>✅ Added debounce mechanism to avoid frequent resize event triggers</li>
          <li>✅ Optimized size change detection, only significant changes trigger re-renders</li>
          <li>✅ Separated container size initialization and chart rendering logic</li>
          <li>✅ Used responsive utility functions to improve code reusability</li>
        </ul>
      </div>
    </div>
  );
}