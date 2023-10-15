import axios from 'axios';

export const fetchAllData = () => async (dispatch) =>{
    try {
        dispatch({type : 'request'})
    
        const {data} = await axios.get("https://api.quicksell.co/v1/internal/frontend-assignment/");

        dispatch({type : 'success', payload : data});

    } catch (error) {
        dispatch({type : 'failure'})
    }
}

export const selectData = (group, allTickets, orderValue) => async (dispatch) => {
    try {
        dispatch({ type: 'data_get' });

        let user = false;
        const selectedData = [];

        if (group === 'status') {
            const uniqueStatuses = [...new Set(allTickets.map(ticket => ticket.status))];

            uniqueStatuses.forEach((status, index) => {
                const filteredTickets = allTickets.filter(ticket => ticket.status === status);
                selectedData.push({ [index]: { title: status, value: filteredTickets } });
            });
        } else if (group === 'user') {
            user = true;
            allTickets?.allUser?.forEach((user, index) => {
                const filteredTickets = allTickets?.allTickets?.filter(ticket => user.id === ticket.userId);
                selectedData.push({ [index]: { title: user.name, value: filteredTickets } });
            });
        } else {
            const priorityList = ["No priority", "Low", "Medium", "High", "Urgent"];

            priorityList.forEach((priority, index) => {
                const filteredTickets = allTickets.filter(ticket => index === ticket.priority);
                selectedData.push({ [index]: { title: priority, value: filteredTickets } });
            });
        }

        if (orderValue === "title") {
            selectedData.forEach(item => {
                item[Object.keys(item)[0]].value.sort((a, b) => a.title.localeCompare(b.title));
            });
        }

        if (orderValue === "priority") {
            selectedData.forEach(item => {
                item[Object.keys(item)[0]].value.sort((a, b) => b.priority - a.priority);
            });
        }

        dispatch({ type: 'data_success', payload: { selectedData, user } });
    } catch (error) {
        dispatch({ type: 'data_failure', payload: error.message });
    }
}
