export type SpotSeatProps = {
  spotId: string;
  spotLabel: string;
  reserved: boolean;
  disabled: boolean;
}

export const SpotSeat = ({
  spotId,
  spotLabel,
  reserved,
  disabled,
}: SpotSeatProps) => {
    return (
      <div className="flex">
        <input 
          type="checkbox" 
          name={`spots`} 
          id={`spot-${spotId}`} 
          className="peer hidden" 
          value={spotId} 
          disabled={disabled} 
          defaultChecked={reserved}/>
      </div>
    )
}