import CloseIcon from '@mui/icons-material/Close';
import { Button, Grid, Popover, TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { Box, Stack } from '@mui/system';
import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import React, { useState } from 'react';
import { DateTimePicker } from '../DateTimePicker';
dayjs.extend(weekday);
interface DayProps {
  day: number;
  activeDay: dayjs.Dayjs;
}

const Day: React.FC<DayProps> = ({ day, activeDay }) => {
  const [dragStart, setDragStart] = useState(0);
  const [dragEnd, setDragEnd] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [from, setFrom] = useState(dayjs());
  const [to, setTo] = useState(dayjs());
  const boxRef = React.useRef<HTMLDivElement>(null);

  const resetDraggingOperation = () => {
    setDragStart(0);
    setDragEnd(0);
    setDragging(false);
    setTooltipVisible(false);
  };

  const calculateYPos = (e: React.MouseEvent<HTMLDivElement>) => {
    const yPos = e.clientY - e.currentTarget.getBoundingClientRect().top - ((e.clientY - e.currentTarget.getBoundingClientRect().top) % 15);
    return yPos;
  };
  return (
    <>
      <Stack
        onMouseDown={(e) => {
          //starts the dragging operation and sets the start position
          resetDraggingOperation();
          const yPos = calculateYPos(e);
          setDragStart(yPos);
          setDragging(true);
        }}
        onMouseMove={(e) => {
          //updates the end position
          if (dragging) {
            const yPos = calculateYPos(e);
            setDragEnd(yPos);
          }
        }}
        onMouseUp={(e) => {
          //stops the dragging operation and sets the end position
          if (dragStart == dragEnd) {
            resetDraggingOperation();
            return;
          }
          if (dragStart - dragEnd < 0) {
            console.log(dragStart - dragEnd);
            setTooltipVisible(true);
          }
          setFrom(
            activeDay
              .weekday(day + 1)
              .hour(Math.floor(dragStart / 30))
              .minute((dragStart % 30) * 2),
          );
          setTo(
            activeDay
              .weekday(day + 1)
              .hour(Math.floor(dragEnd / 30))
              .minute((dragEnd % 30) * 2),
          );
          setDragging(false);
        }}
        onMouseLeave={(e) => {
          //reset the dragging operation if the mouse leaves the element, except if the tooltip is visible
          if (!tooltipVisible) {
            resetDraggingOperation();
          }
        }}
        key={day}
        style={{ position: 'relative', height: '100%', userSelect: 'none' }}>
        {dragStart !== dragEnd && (
          <Box
            ref={boxRef}
            onMouseDown={(e) =>
              //stopping clicks on the box from propagating to the day and closing the tooltip
              e.stopPropagation()
            }
            onMouseUp={(e) => e.stopPropagation()}
            onMouseMove={(e) => {
              if (dragging) {
                const yPos = calculateYPos(e);
                setDragEnd(yPos);
              }
              e.stopPropagation();
            }}
            sx={{
              position: 'absolute',
              top: dragStart,
              height: dragEnd - dragStart,
              left: 0,
              right: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              zIndex: 1,
              borderRadius: '16px',
            }}>
            <Popover
              open={tooltipVisible}
              anchorEl={boxRef.current}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}>
              <Box bgcolor={'primary.dark'} sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 4 }}>
                <IconButton
                  onClick={() => {
                    resetDraggingOperation();
                  }}
                  sx={{ marginLeft: 'auto' }}>
                  <CloseIcon />
                </IconButton>
                <DateTimePicker title='Fra' value={from} setValue={(val) => setFrom(val)} />
                <DateTimePicker title='Til' value={to} setValue={(val) => setTo(val)} />
                <TextField multiline label='Kort beskrivelse' />
                <Button variant='outlined'>Send forespørsel</Button>
              </Box>
            </Popover>
          </Box>
        )}
        {[...Array(12)].map((_, hour) => (
          <Box
            key={hour}
            sx={{
              height: 60,
              borderTop: hour !== 0 ? '1px solid rgba(255, 255, 255, 0.12)' : '',
              borderLeft: day !== 0 ? '1px solid rgba(255, 255, 255, 0.12)' : '',
            }}>
            {day === 0 ? (hour * 2).toString().padStart(2, '0') + ':00' : null}
          </Box>
        ))}

        <Grid item xs={1} />
      </Stack>
    </>
  );
};

export default Day;
