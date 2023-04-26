
const Table = ({stores, setData}) => {
    const monthlyTotal = new Array(12).fill(0)

    stores.forEach(store => {
        store.months.forEach((month, i) => {
            monthlyTotal[i] += month.value
        })
    });


    const store = stores.map(store => store)
    const everyStoreReduce = store.map(sot => sot.months.reduce((acc, el) => acc + Number(el.value), 0))
    const everyStoreTotal = everyStoreReduce.reduce((acc, el) => acc += el, 0)
    const monthlyReduce = monthlyTotal.reduce((acc, el) => acc += el, 0)



    const handleUpdateValue = (storeId, monthName, newValue) => {
        const newData = stores.map(store => {
            if (store.store.id === storeId) {
                return {
                    ...store,
                    months: store.months.map(month => {
                        if (month.name === monthName) {
                            return {
                                ...month,
                                value: Number(newValue)
                            };
                        }
                        return month;
                    })
                };
            }
            return store;
        });
        setData(newData);
        console.log(newData,'newData')
    };


    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>
                        Store
                    </th>
                    {
                        stores[0].months.map(month =>
                            <th key={month.id}>
                                {month.name}
                            </th>)
                    }
                    <th>
                        Total
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    stores.map(store => (
                        <tr key={store.store.id}>
                            <td>
                                {store.store.name}
                            </td>
                            {
                                store.months.map(month => (
                                    <td key={month.id}>
                                        <input
                                            type='number'
                                            value={month.value}
                                            onChange={(e) => handleUpdateValue(store.store.id,month.name, e.target.value )}
                                        />
                                    </td>
                                ))
                            }
                            <td>{
                                store.months.reduce((acc, el) => acc + Number(el.value), 0)
                            }</td>
                        </tr>
                    ))
                }
                <tr>
                    <td>Total</td>
                    {
                        monthlyTotal.map((month, index) => (
                            <td key={index}>
                                {month}
                            </td>
                        ))
                    }
                    <td>
                        {everyStoreTotal + monthlyReduce}
                    </td>
                </tr>
                </tbody>
            </table>
        </>

    );
};

export default Table