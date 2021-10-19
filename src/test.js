import WebViewer from '@pdftron/webviewer';

import {useEffect, useRef} from 'react';

const Test = () => {
  const viewer = useRef(null);

  useEffect(() => {
    WebViewer(
      {
        path: 'lib',
        initialDoc: 'https://greenteapress.com/thinkpython2/thinkpython2.pdf',
      },
      
    ).then((instance) => {
        const { documentViewer } = instance.Core;
        // you can now call WebViewer APIs here...
      });
  }, []);

  return (
    <div className="MyComponent">
      <div className="header">React sample</div>
      <div className="webviewer" ref={viewer} style={{height: "100vh"}}></div>
    </div>
  );
};

export default Test;