import { Selector } from 'testcafe';

fixture `Get Jobs`
    .page `https://jobs.rbc.com/ca/en/rbctech?s=1&rk=l-technology&s=1&rk=l-technology&from=1`;

test('New Test', async t => {
    await t
        .
        .click(Selector('#fl-main-content span').withText('Development Manager').nth(1))
        .drag(Selector('#main-content b').withText('Application Deadline:'), 214, 28, {
            offsetX: 1,
            offsetY: 12
        })
        .drag(Selector('#main-content b').withText('Posted Date:'), 159, 31, {
            offsetX: 2,
            offsetY: 3
        })
        .click(Selector('#main-content p').withText('Posted Date:'));



});



/*
document.querySelectorAll('#main-content div.container section div.phs-jobs-list div.content-block li.jobs-list-item')
NodeList(5) [li.jobs-list-item, li.jobs-list-item, li.jobs-list-item, li.jobs-list-item, li.jobs-list-item]
0: li.jobs-list-item
1: li.jobs-list-item
2: li.jobs-list-item
3: li.jobs-list-item
4: li.jobs-list-item
length: 5
[[Prototype]]: NodeList

*/