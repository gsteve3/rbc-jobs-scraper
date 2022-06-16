import { Selector } from 'testcafe';

fixture `Get Job`
    .page `https://jobs.rbc.com/ca/en/job/R-0000008981/Senior-Full-Stack-Developer`;

test('New Test', async t => {

    let deadline = Selector('#main-content p')
                          .withText('Posted Date:')
                          .textContent();
    let deadline2 = await deadline.textContent;

    console.log(deadline2)

// console.debug(deadline);
    await t
            .debug()
            .setNativeDialogHandler(() => true) 


                // .nextSibling().textContent();


    await t        
        .click(Selector('#fl-main-content span').withText('Development Manager').nth(1))
        .drag(Selector('#main-content b').withText('Application Deadline:'), 214, 28, {
            offsetX: 1,
            offsetY: 12
        })
        .drag(Selector('#main-content b').withText('Posted Date:'), 159, 31, {
            offsetX: 2,
            offsetY: 3
        })
        .click(
            
        );



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

test('New Test 1', async t => {
    await t
        .doubleClick(Selector('#main-content b').withText('Application Deadline:'))    
        .click(Selector('#main-content b').withText('Application Deadline:'))
        .doubleClick(Selector('#main-content div').withText('Come Work with Us!').nth(7))
        .click(Selector('#main-content div').withText('Come Work with Us!').nth(7))
        .click(Selector('#main-content div').withText('Come Work with Us!').nth(7))
});