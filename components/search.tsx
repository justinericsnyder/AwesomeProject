import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const MyComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  

  const onChangeSearch = (query: string)  => setSearchQuery(query);


  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      autoComplete={true}
    />
  );
};

export default MyComponent;