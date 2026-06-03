import React, { useState } from 'react'

interface TabProps {
  label: string;
  children: React.ReactNode;
}

const Tab = ({children}: { children: React.ReactNode}) => {
    return (<div className="">{children}</div>
    )
}

const Tabs = ({ children }: { children: React.ReactNode }) => {
    const [activeTab, setActiveTab] = useState(0)
    const validChildren = React.Children.toArray(children).filter(
    (child): child is React.ReactElement<TabProps> => React.isValidElement(child)
  );

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
        {validChildren.map((child, index) => {
          return (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              style={{
                marginRight: '0.5rem',
                fontWeight: activeTab === index ? 'bold' : 'normal',
              }}
            >
              {child.props.label}
            </button>
          );
        })}
        <Tab>{validChildren[activeTab].props.children}</Tab>
    </div>
  )

}

Tabs.Item = Tab

export default Tabs