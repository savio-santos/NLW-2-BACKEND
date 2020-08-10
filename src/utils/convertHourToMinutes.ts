export default function convertHourtoMinutes(time: string){
    //8:00

    const [hour,minutes] = time.split(':').map(Number);
    return (hour*60) + minutes;
     
}