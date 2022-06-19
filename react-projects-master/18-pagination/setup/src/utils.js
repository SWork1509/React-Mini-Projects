const paginate = (followers) => {
    const ITEMS_PER_PAGE = 9;
    const PAGES = Math.ceil(followers.length / ITEMS_PER_PAGE);
    const newFollowers = Array.from({ length: PAGES }, (_, index) => {
        const START = index * ITEMS_PER_PAGE;
        return followers.slice(START, START + ITEMS_PER_PAGE);

    })
    console.log(newFollowers);
    return newFollowers;
}

export default paginate

