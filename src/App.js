import Wrapper from './components/Wrapper'
import Screen from './components/Screen'
import ButtonBox from './components/ButtonBox'
import Button from './components/Button'

function App() {
  return (
    <Wrapper>
      <Screen value='0'>
        <ButtonBox>
          <Button
            className=""
            value="0"
            onclick={() => {
              console.log('button clicked');
            }}
          >

          </Button>
        </ButtonBox>
      </Screen>
    </Wrapper>
  );
}

export default App;
