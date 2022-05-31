import React from 'react';
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from '@syncfusion/ej2-react-kanban';
import { kanbanGrid, kanbanData } from '../../dummy';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import './kanban.scss';

const Kanban = () => {
  return (
    <div className='kanban'>
      <Sidebar />
      <div className='container'>
        <Navbar />
        <div className='kanbanContainer'>
          <KanbanComponent
            id='kanban'
            keyField='Status'
            dataSource={kanbanData}
            cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
          >
            <ColumnsDirective>
              {kanbanGrid.map((item, index) => (
                <ColumnDirective key={index} {...item} />
              ))}
            </ColumnsDirective>
          </KanbanComponent>
          ;
        </div>
      </div>
    </div>
  );
};

export default Kanban;
