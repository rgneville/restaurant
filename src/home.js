function home () {
    const cntnr = document.querySelector('#content');

    const homeHeader = document.createElement('h1');
    homeHeader.innerHTML = "the green field";
    cntnr.appendChild(homeHeader);

    const homeImg = document.createElement('img');
    homeImg.src = "https://lh3.googleusercontent.com/a1Xkwh88CAdV2x80PhrWKkP0SkKxgE7hV_SIHucYvyEd7VOWlkLJDDdbJuLXblT9ZPRINrlmj4rVRErh485K1AuOEfasxNLYyFCtuggyoYXbGHEoSQRg_PIwSA5Odc0W57ioLc3GQz84ur7ni0NLetOz89dVshuNPaeeu4Uyvzo0qoTdvg5eJfSYxWsqQn9MYmMBRbWLmE6-xGystHU_gwN998N6lWAzZN8N5CGEqQgb2Idefc6mPWBHppjK7WbhAwyqrnvxds80_Lt6n0Aut08nW9uqDRFOtb_18TwF2g1cgDHi643FbEbCpHP25UnDzVzX8g_w7gCMc1hNBRc-o1-0XbVo2bYtg1cdrWlmoskEm70I4t8i62xWxM72ACKckRK_USrnlh8eV-80JYbIepR89SpzpIqpnb_T4wavHZg4w8eIdcxe0lqsS6vlo1Sp11H4IhxNHuRRzXaVqNEBrwn9cYLFQj7TQpbirt5X8CALpyG5Og6gJgW-W8dZF49AH69q46lzANFhgVmUm45zmbLBNLE8X3UT_ELC3Z9mE6zPV7oE4x3NRpO_EEgS2MjeSUjl5BDWnxeHXrkdS0bzgcQucBkMN_yp3OfetAdIHVsaiLN8tCtZxVpFPqmNGZ92AmRKrJBM3ZgDFNCnM1KS2cDiTc4boAEjkOhkJsMvmeVCqflBkdB5kIOV4J0m=w800-h600-no?authuser=0";
    cntnr.appendChild(homeImg);

    const homeTagline = document.createElement('p');
    homeTagline.innerHTML = "fresh ingredients, served in a slightly dated building";
    cntnr.appendChild(homeTagline);

    return
}

export default home;