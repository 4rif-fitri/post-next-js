"use client"; //ini client rendering bukan server rendering

interface ViewUserButtonProps{
  userId: number
}
  //rexct funtional componrnt
const ViewUserButton: React.FC<ViewUserButtonProps> = ({ userId }) => {
  const hendleClick = () => {
    alert( `user is : ${userId}`);
  };

  return (
    <>
      <button onClick={() => hendleClick()}>Users Button</button>
    </>
  );
};

export default ViewUserButton;
