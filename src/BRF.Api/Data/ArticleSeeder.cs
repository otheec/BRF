using BRF.Api.Domain;
using Microsoft.EntityFrameworkCore;

namespace BRF.Api.Data;

public static class ArticleSeeder
{
    public static async Task SeedAsync(IServiceProvider services)
    {
        using var scope = services.CreateScope();
        var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();

        if (await db.Articles.AnyAsync())
            return;

        var articles = new List<Article>
    {
        new()
        {
            Id = Guid.NewGuid(),
            Title = "Umění sklizně chmele: Od révy po várku",
            AuthorId = "Marcus Thorne",
            Tag = "Reportáž",
            CoverImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuAjipW3aybNi9uK_TAIYPJ5QaRthgjHht38BmxHarenK6-jCwzhgNe-C6Te6ckkGNLl2I31Rkfv8c-VZ0neCy5rapQNpTiAW8Stlqw1FXwN27SMUzzLeLoArqOGTOD69ubXaybYBViLS4jNahYsnLY2GGUfSHZYno2Sbz-0tJEpUFLFkW2TTBYcoOWwsciD4zK01nDxVdZ4zFXFomWQd1Ltnrff7vkYI_0wmzkJZKRlqfK9yygsk7hAykyZpSWmYLcPIJ4ZioYiLCI",
            PublishedAt = new DateTime(2024, 10, 24, 0, 0, 0, DateTimeKind.Utc),
            CreatedAt = DateTime.UtcNow,
            Content =
            [
                new() { Type = ArticleSectionType.Paragraph, Text = "Každý podzim v údolí Yakima nese vzduch opojnou vůni borovice, citrusů a hlíny — sklizeň chmele začíná. Pro sládky i pěstitele je to nejdůležitější a zároveň nejslavnostnější období pivovarského kalendáře." },
                new() { Type = ArticleSectionType.Heading, Text = "Rozhodující okamžik" },
                new() { Type = ArticleSectionType.Paragraph, Text = "Načasování sklizně je naprosto zásadní. Příliš rané trhání přinese travnaté, nezralé chutě, které dokážou přebít i jemné pivo. Na druhou stranu příliš pozdní sklizeň znamená, že cenné lupulinové žlázy — žlutý pryskyřičný prach uvnitř chmelové šišky nesoucí veškeré aroma a hořkost — začnou oxidovat a výsledkem jsou nudné, nežádoucí profily." },
                new()
                {
                    Type = ArticleSectionType.Images,
                    Images =
                    [
                        new() { Src = "https://lh3.googleusercontent.com/aida-public/AB6AXuBgJbxzi56YwAoimbQGZtpdgsqMrbbFYjw7ejKMJLZosMYVIVpncmot5ufqvVdFbUO5XnwZD_foDOGiNSiQAn1grQDyUDQJSSkMCpJIDDIyxhAFUQAtUvt447X07w0oUD-CUElOfs1zPqk-rGikw-CKa-nzVM7fhLMPwRoQovIl8f1Qzdh3aNxKwFjNYyWA1M8R90MuxdxvjhNL2-xaGmxDg9VJrVxxgUIFOLGmeoLOMRnsKoWEiuF2b2F1zzmPJBCDjIxJIU5-xkM", Alt = "Čerstvý chmel", Caption = "Lupulinové žlázy v ideální zralosti." },
                        new() { Src = "https://lh3.googleusercontent.com/aida-public/AB6AXuD5Ay2_wB3zodaXqKS4li2SZ4yk3GlI9y56ZZheTFBGQivEsPJBkXFRxNcE4DPmSH610XMHm4e8DZv_bhAOrXEMBzd66J_cdFP_a5hAW7ovVhhrcBOE9JEeCCJJgjHsypYiQAtfiCO7S96HHfHJ2pcLaYM-Pc91sgqBCb90xWDHAevB_myM0XBWGht4p0OFkjjnbLF0MbwE6MEZ3nh3yKWoGhST_bCZLimmLmepP4dMOwZr4WDgUM2KNwqFLtI6_3IgjFpfn9k0zYI", Alt = "Zpracování", Caption = "Zpracování denní úrody." },
                    ],
                },
                new() { Type = ArticleSectionType.Heading, Text = "Tradice potkává technologii" },
                new() { Type = ArticleSectionType.Paragraph, Text = "Moderní sušárny dokážou vysušit chmel na přesnou vlhkost za zlomek času, který to dříve trvalo. Přesto mnoho pěstitelů stále spoléhá na osvědčenou techniku — rozemnout šišku mezi dlaněmi a posoudit lepkavost a vůni hmatem, který žádný senzor nenahradí. Nejlepší provozy kombinují obojí." },
                new() { Type = ArticleSectionType.Quote, Text = "Sklizeň chmele je silvestrem pivovarského světa. Všechno k ní směřuje a její průběh udává tón celému nadcházejícímu roku." },
                new() { Type = ArticleSectionType.Paragraph, Text = "Fresh-hop piva — někdy nazývaná wet-hop — dovádějí tuto naléhavost do extrému. Používají chmel do 24 hodin od sklizně, ještě před sušením či peletováním. Výsledkem je pomíjivý styl, který se vaří jen jednou za rok a na který pivní nadšenci cestují stovky kilometrů." },
            ],
        },
        new()
        {
            Id = Guid.NewGuid(),
            Title = "Věda o karbonizaci",
            AuthorId = "Elena Vasquez",
            Tag = "Věda",
            CoverImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuBkr2nm0Zh8AgtVUlKSjTEbsqi_XUOia9ZZkUGInrT_E0hB9tiI0V9FlT6yOsUHi4PAxe8GY3HqtFeTBYLg1o4MYjpJD_5UAxbCo2j77Tymwkz3AXKhw6kZ3vmp1td3rWWyfHC_yYUzKuiMkEKheYPtRJz0SLxXvsQ_aqlF_7jWwVaVcprYRZ6SboMArBeuIYL3JCbbUWrS_xUqXpUDLKOS-AsHweNyYy6t6A_07IS_eczHMWF-AiJW57UrYVkoodxvzHHjYSHriEc",
            PublishedAt = new DateTime(2024, 10, 20, 0, 0, 0, DateTimeKind.Utc),
            CreatedAt = DateTime.UtcNow,
            Content =
            [
                new() { Type = ArticleSectionType.Paragraph, Text = "To živé brnění v každém doušku piva není žádná magie — je to rozpuštěný CO2, který uniká z kapaliny při poklesu tlaku. Pochopení karbonizace je klíčové jak pro vaření skvělého piva, tak pro ocenění toho, co máte ve sklenici." },
                new() { Type = ArticleSectionType.Heading, Text = "Přirozená vs nucená karbonizace" },
                new() { Type = ArticleSectionType.Paragraph, Text = "Přirozená karbonizace nastává, když zbytkové kvasnice spotřebují malý přídavek kvasinového cukru a produkují CO2 v uzavřené nádobě. Tento způsob, používaný pro lahvově dozrávající piva a tradiční sudy, obvykle vytváří jemnější a trvanlivější bubliny. Nucená karbonizace — přímé vpouštění CO2 do uzavřeného tanku — je rychlejší a lépe ovladatelná, což z ní dělá standard průmyslové výroby ležáků." },
                new() { Type = ArticleSectionType.Heading, Text = "Objemy podle stylu" },
                new() { Type = ArticleSectionType.Paragraph, Text = "Různé styly vyžadují různou úroveň karbonizace, měřenou v objemech CO2. Sudové pivo může mít pouhých 1,5 objemu — téměř bez bublinek. Německý Weizen může dosáhnout 4,0 objemů, což mu dodává charakteristickou šumivost. Většina amerických ale a ležáků se pohybuje v rozmezí 2,4–2,8 objemu." },
                new() { Type = ArticleSectionType.Paragraph, Text = "Na teplotě záleží také. CO2 se lépe rozpouští ve studené kapalině, proto se teplé pivo zdá plynaté a přitom rychle vyprchá. Teplota podávání není jen o chuti — zásadně ovlivňuje, jak vnímáme tělo a dozvuk piva." },
            ],
        },
        new()
        {
            Id = Guid.NewGuid(),
            Title = "Zrání v sudech: Zkouška nejvyšší trpělivosti",
            AuthorId = "David Chen",
            Tag = "Do hloubky",
            CoverImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuARTxp-5PKvex6ZHQT-bzEyKXGJoC-0jLIq7kmW96FmuCyEAkkwwKg_5hNt7YyBAbKJyGjRxWPHrUgjY3iC21_7g_lDGbmp-bO0nP7itg1pBtWtKOI8-JVIFNRXSamUHuX1m3DNnDmVDbSMhyVPmKhjGh1vPe7B0Cx8lxdvVMAnJQZbq71-3hbYJpcUcaRvQxTNVBXHvlodZUJrnt_nBUiHssL5cwhdWMbN9N0z0OJNS1BT-CZYx9sb9w-jDATkpf91T7KsaO1kz18",
            PublishedAt = new DateTime(2024, 10, 18, 0, 0, 0, DateTimeKind.Utc),
            CreatedAt = DateTime.UtcNow,
            Content =
            [
                new() { Type = ArticleSectionType.Paragraph, Text = "V přítmí skladu tiše dýchají řady dubových sudů. Co do nich vstoupilo jako imperial stout nebo wild ale, vyjde — po měsících či letech — jako něco zcela proměněného. Zrání v sudech je to nejbližší, co má řemeslné pivovarnictví k alchymii." },
                new() { Type = ArticleSectionType.Heading, Text = "Výběr správného sudu" },
                new() { Type = ArticleSectionType.Paragraph, Text = "Bourbonové sudy jsou nejběžnější nádobou pro zrání tmavých piv. Zuhelnatělý americký dub dodává tóny vanilky, karamelu a kokosu spolu se zbytkovou whiskey, která přidává teplo a komplexitu. Vinné sudy — Chardonnay, Pinot Noir, Cabernet — se používají pro kyselá piva a přinášejí třísloviny, peckovinové tóny a jemnou kyselost." },
                new() { Type = ArticleSectionType.Heading, Text = "Andělský podíl" },
                new() { Type = ArticleSectionType.Paragraph, Text = "Každý rok se část obsahu sudu odpaří skrz porézní dub — ztráta, které sládci říkají andělský podíl. Ve vlhkých sklepech to mohou být pouhá dvě procenta, v suchých a teplých podmínkách může přesáhnout deset. Tento koncentrační efekt zesiluje chutě, ale snižuje výtěžnost, což částečně vysvětluje, proč si sudově zrálá piva říkají o prémiovou cenu." },
                new() { Type = ArticleSectionType.Quote, Text = "Do sudu dáte své nejlepší pivo a čekáte. Některé šarže jsou nadpozemské. Některé skončí v odpadu. To je ta sázka — a ta sláva." },
                new() { Type = ArticleSectionType.Paragraph, Text = "Trpělivost je nakonec nejdůležitější ingrediencí sládka při práci se sudy. Žádná zkratka neexistuje. Dřevo vydá své dary podle vlastního rozvrhu." },
            ],
        },
        new()
        {
            Id = Guid.NewGuid(),
            Title = "Jak vybrat správnou sklenici pro každý styl",
            AuthorId = "Anna Kowalski",
            Tag = "Průvodce",
            CoverImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuDr6_xezN2BVGeDqDzveoCVPZXQFxol8nCrUxd67xXooqkNFQGAQs4cyY08bk-2EXSe5mFNmkthfm-qHJoIrMrQMbOp_46G7UReek7JL6bCbEaIBCUw8Nfz3vVxWB0qdRrVpP-mrUYys0ymu28V2DyhlSxJA656xWINCWGt4vOLmsZ_arzlQkU7JBbs-WFj_bnwiHqkPmvDRjVJ5BH0DTHLfEEMJGp30LTQ0ndsewuyIJKUTtsGHg2J0qE3FWEy4k536L08snHn8TM",
            PublishedAt = new DateTime(2024, 10, 15, 0, 0, 0, DateTimeKind.Utc),
            CreatedAt = DateTime.UtcNow,
            Content =
            [
                new() { Type = ArticleSectionType.Paragraph, Text = "Sklenice je často přehlížená proměnná při ochutnávání piva. Nalijte stejné pivo do půllitru a do tulipánu — a ochutnáte dvě různá piva. Tvar sklenice soustřeďuje aroma, reguluje pěnu a ovlivňuje, jak se kapalina dostane na vaše patro." },
                new() { Type = ArticleSectionType.Heading, Text = "Tulipán pro IPA" },
                new() { Type = ArticleSectionType.Paragraph, Text = "Tulipánová sklenice — s rozšířeným okrajem a baňatým tělem — je ideální partner pro aromatická piva jako IPA nebo belgické ale. Tvar směřuje chmelové a esterové vůně přímo k nosu a rozšířený okraj pomáhá udržovat stálou pěnovou čepici. Pokud si pořizujete jen jednu speciální sklenici, zvolte tulipán." },
                new() { Type = ArticleSectionType.Heading, Text = "Weizen sklenice pro pšeničná piva" },
                new() { Type = ArticleSectionType.Paragraph, Text = "Vysoká, štíhlá Weizen sklenice pojme objemnou pěnovou korunu, kterou hefeweizen vytváří, a přitom nabízí dostatečný objem pro celé pivo. Úzká spodní část koncentruje kvasnice v poslední třetině, takže si můžete sami rozhodnout, kolik kalnosti přidáte." },
                new() { Type = ArticleSectionType.Heading, Text = "Snifter pro silná piva" },
                new() { Type = ArticleSectionType.Paragraph, Text = "Silná, komplexní piva — barleywine, imperial stout, sudově zrálé ale — patří do snifteru. Malý otvor zachycuje aroma, široká miska jemně ohřívá pivo v dlani (což je u stylů s vysokým obsahem alkoholu výhoda) a menší objem podporuje pomalé, rozjímavé popíjení." },
                new() { Type = ArticleSectionType.Heading, Text = "Pilsner sklenice pro ležáky" },
                new() { Type = ArticleSectionType.Paragraph, Text = "Vysoká, zúžená Pilsner sklenice vynikne brilantní čirostí a jemnou perlivostí dobře uvařeného ležáku. Drží pivo studené déle než široce otevřené nádoby a úzký otvor pomáhá zachovat ono jemné, trávové chmelové aroma, které definuje celý styl." },
            ],
        },
    };

        db.Articles.AddRange(articles);
        await db.SaveChangesAsync();
    }
}