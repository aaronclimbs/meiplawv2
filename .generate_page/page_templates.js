const lowerFirstLetter = (name) => {
  first = name.charAt(0).toLowerCase();
  return first + name.substring(1);
};

// page.tsx
exports.page = (name) => `// Packages
import type { NextPage } from "next";
import React, { useEffect } from 'react';

// Hooks

// Components
import { Layout } from '../../components';

// Utils

// Styles
import styles from './${name}.module.scss';

const ${name}: NextPage = () => {

  return (
    <Layout className="{styles.${lowerFirstLetter(name)}}">
      <h1>Locations</h1>
      <p>Hello, I am the ${name} page.</p>
    </Layout>
  );
};

export default ${name};
`;

// page.scss
exports.style = (name) => `.${lowerFirstLetter(name)} {}`;
