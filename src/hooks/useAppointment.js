

const useAppointment = () => {

        const handlePatientId = (e) => {
                console.log(e.target.placeholder);
        }
        const handlePatientName = (e) => {
                console.log(e.target.value);
        }
        const handlePatientPhone = (e) => {
                console.log(e.target.value);
        }
        const handlePatientEmail = (e) => {
                console.log(e.target.value);
        }

        return {
                handlePatientId,
                handlePatientName,
                handlePatientPhone,
                handlePatientEmail
        }
}

export default useAppointment;