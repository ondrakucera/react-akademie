export const Button = () => {
  const name = 'Ondra';

  const onButtonClick = () => {
    console.log('Button clicked');
  };

  return <button onClick={onButtonClick}>{name}</button>;
};
