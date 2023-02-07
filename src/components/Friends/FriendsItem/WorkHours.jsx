import React, { useState } from 'react';
import { TimeList, DayItem, TimeBtn } from './FriendsItem.styled';

const WorkHours = ({ workDays }) => {
  const [showModal, setShowModal] = useState(false);

  const days = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
  const currentDate = new Date();
  const currentDay = currentDate.getDay();

  const updateIdx = () => {
    if (currentDay === 0) {
      return 6;
    }
    return currentDay - 1;
  };

  const handleClick = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <TimeBtn type="button" onClick={handleClick}>
        {workDays[updateIdx()].from && workDays[updateIdx()].to
          ? `${workDays[updateIdx()]?.from} - ${workDays[updateIdx()]?.to}`
          : 'Closed'}
      </TimeBtn>

      {showModal && workDays && (
        <TimeList>
          {workDays.map(({ from, to, isOpen }, index) => (
            <li key={index}>
              {isOpen ? (
                <DayItem>
                  <span>{days[index]}</span>
                  <span>
                    {from}-{to}
                  </span>
                </DayItem>
              ) : (
                <DayItem>
                  <span>{days[index]}</span>
                  <span>Closed</span>
                </DayItem>
              )}
            </li>
          ))}
        </TimeList>
      )}
    </>
  );
};

export default WorkHours;
