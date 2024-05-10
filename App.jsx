import * as React from 'react';
import { View,Text  } from 'react-native';
import { Button ,ListItem,Tab,FAB,Rating,CheckBox,Switch,Text as RNText,Divider,Input ,SearchBar,SpeedDial } from '@rneui/themed';
import { Icon } from '@rneui/themed';

const App = () => {

  const [open, setOpen] = React.useState(false);


  const [search, setSearch] = React.useState("");

const updateSearch = (search) => {
  setSearch(search);
};
  const [visible, setVisible] = React.useState(true);
  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);

  const toggleSwitch = () => {
    setChecked(!checked);
  };


  return (


    <View>

<SearchBar
      placeholder="Type Here..."
      onChangeText={updateSearch}
      value={search}
    />
 <Input placeholder="Password" secureTextEntry={true} />
<Input
      placeholder='BASIC INPUT'
    />
      <Text>React Text</Text>
      <Divider/>
<RNText h1>Heading 1</RNText>
  <RNText h2>Heading 2</RNText>
  <RNText h3>Heading 3</RNText>
  <RNText h4>Heading 4</RNText>

 <Switch
      value={checked}
      onValueChange={(value) => setChecked(value)}
    />
<CheckBox
           checked={checked}
           onPress={toggleCheckbox}
           // Use ThemeProvider to make change for all checkbox
           iconType="material-community"
           checkedIcon="checkbox-marked"
           uncheckedIcon="checkbox-blank-outline"
           checkedColor="red"
         />
<Rating showRating fractions="{1}" startingValue="{3.3}" />




<FAB
        loading
        visible={visible}
        icon={{ name: 'add', color: 'white' }}
        size="small"
      />

   

      <Tab value={0} scrollable>
  <Tab.Item
    containerStyle={(active) => ({
      backgroundColor: active ? "red" : undefined,
    })}
  >
    Tab
  </Tab.Item>
  <Tab.Item
    buttonStyle={(active) => ({
      backgroundColor: active ? "red" : undefined,
    })}
  >
    Tab
  </Tab.Item>
</Tab>


   <ListItem>
  <ListItem.Content>
    <ListItem.Title>John Doe</ListItem.Title>
    <ListItem.Subtitle>CEO, Example.com</ListItem.Subtitle>
  </ListItem.Content>

  <ListItem.Content>
    <ListItem.Title>Jane Doe</ListItem.Title>
    <ListItem.Subtitle>CEO of CEO, Example.com</ListItem.Subtitle>
  </ListItem.Content>

</ListItem>
      <Button title="Solid" />
      <SpeedDial
    isOpen={open}
    icon={{ name: 'edit', color: '#fff' }}
    openIcon={{ name: 'close', color: '#fff' }}
    onOpen={() => setOpen(!open)}
    onClose={() => setOpen(!open)}
  >
    <SpeedDial.Action
      icon={{ name: 'add', color: '#fff' }}
      title="Add"
      onPress={() => console.log('Add Something')}
    />
    <SpeedDial.Action
      icon={{ name: 'delete', color: '#fff' }}
      title="Delete"
      onPress={() => console.log('Delete Something')}
    />
  </SpeedDial>
    </View>

  );
};

export default App;
