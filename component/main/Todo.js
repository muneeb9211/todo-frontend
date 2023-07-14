import Image from 'next/image';
import React from 'react';
import TabsComponent from '../tabs/Tabs';

function Todo() {
  return (
    <>
      {/* header */}

      <div className="header">
        <Image src="assets/images/todo.svg" alt="logo" height={60} width={230} />
      </div>
      {/* tabs component start  */}
      <TabsComponent />
      {/* tabs component end  */}
    </>
  );
}

export default Todo;
