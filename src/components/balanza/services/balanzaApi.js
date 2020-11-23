export const getWeightApi = async () => {
    // console.log('llamando a la api');

    const config = {
        method: 'GET'
    }


    const response = await fetch(process.env.REACT_APP_API_URL, config);
    const weight = await response.json();
    console.log(weight)
} 