import fetch from 'node-fetch';
import fs from 'fs';
const links = [
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Aluminium_antimonide",
        "name": "Aluminium antimonide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Aluminium_arsenate",
        "name": "Aluminium arsenate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Aluminium_arsenide",
        "name": "Aluminium arsenide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Aluminium_diboride",
        "name": "Aluminium diboride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Aluminium_bromide",
        "name": "Aluminium bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Aluminium_carbide",
        "name": "Aluminium carbide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Aluminium_iodide",
        "name": "Aluminium iodide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Aluminium_nitride",
        "name": "Aluminium nitride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Aluminium_oxide",
        "name": "Aluminium oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Aluminium_phosphide",
        "name": "Aluminium phosphide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Aluminium_chloride",
        "name": "Aluminium chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Aluminium_fluoride",
        "name": "Aluminium fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Aluminium_hydroxide",
        "name": "Aluminium hydroxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Aluminium_nitrate",
        "name": "Aluminium nitrate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Aluminium_sulfide",
        "name": "Aluminium sulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Aluminium_sulfate",
        "name": "Aluminium sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Aluminium_potassium_sulfate",
        "name": "Aluminium potassium sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ammonia",
        "name": "Ammonia"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ammonium_azide",
        "name": "Ammonium azide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ammonium_bicarbonate",
        "name": "Ammonium bicarbonate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ammonium_bisulfate",
        "name": "Ammonium bisulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ammonium_bromide",
        "name": "Ammonium bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ammonium_chromate",
        "name": "Ammonium chromate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ammonium_cerium(IV)_nitrate",
        "name": "Ammonium cerium(IV) nitrate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ammonium_cerium(IV)_sulfate",
        "name": "Ammonium cerium(IV) sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ammonium_chloride",
        "name": "Ammonium chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ammonium_chlorate",
        "name": "Ammonium chlorate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ammonium_cyanide",
        "name": "Ammonium cyanide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ammonium_dichromate",
        "name": "Ammonium dichromate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ammonium_dihydrogen_phosphate",
        "name": "Ammonium dihydrogen phosphate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ammonium_hexafluoroaluminate",
        "name": "Ammonium hexafluoroaluminate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ammonium_hexafluorophosphate",
        "name": "Ammonium hexafluorophosphate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ammonium_hexachloroplatinate",
        "name": "Ammonium hexachloroplatinate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ammonium_hexafluorosilicate",
        "name": "Ammonium hexafluorosilicate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ammonium_hexafluorotitanate",
        "name": "Ammonium hexafluorotitanate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ammonium_hexafluorozirconate",
        "name": "Ammonium hexafluorozirconate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ammonium_hydroxide",
        "name": "Ammonium hydroxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ammonium_nitrate",
        "name": "Ammonium nitrate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ammonium_orthomolybdate",
        "name": "Ammonium orthomolybdate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ammonium_sulfamate",
        "name": "Ammonium sulfamate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ammonium_sulfide",
        "name": "Ammonium sulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ammonium_sulfite",
        "name": "Ammonium sulfite"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ammonium_sulfate",
        "name": "Ammonium sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ammonium_perchlorate",
        "name": "Ammonium perchlorate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ammonium_permanganate",
        "name": "Ammonium permanganate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ammonium_persulfate",
        "name": "Ammonium persulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Reinecke%27s_salt",
        "name": "Ammonium diamminetetrathiocynatochromate(III)"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ammonium_thiocyanate",
        "name": "Ammonium thiocyanate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ammonium_triiodide",
        "name": "Ammonium triiodide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Diammonium_dioxido(dioxo)molybdenum&action=edit&redlink=1",
        "name": "Diammonium dioxido(dioxo)molybdenum"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Diammonium_phosphate",
        "name": "Diammonium phosphate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tetramethylammonium_perchlorate",
        "name": "Tetramethylammonium perchlorate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Stibine",
        "name": "Antimony hydride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Antimony_pentachloride",
        "name": "Antimony pentachloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Antimony_pentafluoride",
        "name": "Antimony pentafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Antimony_potassium_tartrate",
        "name": "Antimony potassium tartrate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Antimony_sulfate",
        "name": "Antimony sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Antimony_trichloride",
        "name": "Antimony trichloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Antimony_trifluoride",
        "name": "Antimony trifluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Antimony_trioxide",
        "name": "Antimony trioxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Antimony_trisulfide",
        "name": "Antimony trisulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Antimony_pentasulfide",
        "name": "Antimony pentasulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Argon_fluorohydride",
        "name": "Argon fluorohydride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Arsenic_trifluoride",
        "name": "Arsenic trifluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Arsenic_triiodide",
        "name": "Arsenic triiodide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Arsenic_pentafluoride",
        "name": "Arsenic pentafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Arsenic_trioxide",
        "name": "Arsenic trioxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Arsine",
        "name": "Arsine"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Barium_azide",
        "name": "Barium azide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Barium_bromide",
        "name": "Barium bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Barium_carbonate",
        "name": "Barium carbonate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Barium_chlorate",
        "name": "Barium chlorate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Barium_chloride",
        "name": "Barium chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Barium_chromate",
        "name": "Barium chromate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Barium_ferrate",
        "name": "Barium ferrate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Barium_ferrite",
        "name": "Barium ferrite"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Barium_fluoride",
        "name": "Barium fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Barium_hydroxide",
        "name": "Barium hydroxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Barium_iodide",
        "name": "Barium iodide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Barium_manganate",
        "name": "Barium manganate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Barium_nitrate",
        "name": "Barium nitrate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Barium_oxalate",
        "name": "Barium oxalate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Barium_oxide",
        "name": "Barium oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Barium_permanganate",
        "name": "Barium permanganate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Barium_peroxide",
        "name": "Barium peroxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Barium_sulfate",
        "name": "Barium sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Barium_sulfide",
        "name": "Barium sulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Barium_titanate",
        "name": "Barium titanate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Barium_thiocyanate",
        "name": "Barium thiocyanate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Beryllium_borohydride",
        "name": "Beryllium borohydride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Beryllium_bromide",
        "name": "Beryllium bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Beryllium_carbonate",
        "name": "Beryllium carbonate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Beryllium_chloride",
        "name": "Beryllium chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Beryllium_fluoride",
        "name": "Beryllium fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Beryllium_hydride",
        "name": "Beryllium hydride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Beryllium_hydroxide",
        "name": "Beryllium hydroxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Beryllium_iodide",
        "name": "Beryllium iodide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Beryllium_nitrate",
        "name": "Beryllium nitrate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Beryllium_nitride",
        "name": "Beryllium nitride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Beryllium_oxide",
        "name": "Beryllium oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Beryllium_sulfate",
        "name": "Beryllium sulfate"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Beryllium_sulfite&action=edit&redlink=1",
        "name": "Beryllium sulfite"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Beryllium_telluride",
        "name": "Beryllium telluride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Bismuth_chloride",
        "name": "Bismuth chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Bismuth_ferrite",
        "name": "Bismuth ferrite"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Bismuth_hydroxide",
        "name": "Bismuth hydroxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Bismuth(III)_iodide",
        "name": "Bismuth(III) iodide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Bismuth(III)_nitrate",
        "name": "Bismuth(III) nitrate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Bismuth(III)_oxide",
        "name": "Bismuth(III) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Bismuth_oxychloride",
        "name": "Bismuth oxychloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Bismuth_pentafluoride",
        "name": "Bismuth pentafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Bismuth(III)_sulfide",
        "name": "Bismuth(III) sulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Borane",
        "name": "Borane"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Borax",
        "name": "Borax"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Borazine",
        "name": "Borazine"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Borazocine",
        "name": "Borazocine"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Boric_acid",
        "name": "Boric acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Boron_carbide",
        "name": "Boron carbide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Boron_nitride",
        "name": "Boron nitride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Boron_suboxide",
        "name": "Boron suboxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Boron_tribromide",
        "name": "Boron tribromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Boron_trichloride",
        "name": "Boron trichloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Boron_trifluoride",
        "name": "Boron trifluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Boron_triiodide",
        "name": "Boron triiodide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Boron_trioxide",
        "name": "Boron oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Boroxine",
        "name": "Boroxine"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Decaborane",
        "name": "Decaborane"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Diborane",
        "name": "Diborane"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Diboron_tetrafluoride",
        "name": "Diboron tetrafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Pentaborane",
        "name": "Pentaborane"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tetraborane",
        "name": "Tetraborane"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Bromine_monochloride",
        "name": "Bromine monochloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Bromine_pentafluoride",
        "name": "Bromine pentafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Perbromic_acid",
        "name": "Perbromic acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Aluminium_bromide",
        "name": "Aluminium Bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ammonium_bromide",
        "name": "Ammonium bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Boron_tribromide",
        "name": "Boron tribromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Bromic_acid",
        "name": "Bromic acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Bromine_monoxide",
        "name": "Bromine monoxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Bromine_pentafluoride",
        "name": "Bromine pentafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Bromine_trifluoride",
        "name": "Bromine trifluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Bromine_monofluoride",
        "name": "Bromine monofluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Calcium_bromide",
        "name": "Calcium bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Carbon_tetrabromide",
        "name": "Carbon tetrabromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Copper(I)_bromide",
        "name": "Copper(I) bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Copper(II)_bromide",
        "name": "Copper(II) bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Hydrobromic_acid",
        "name": "Hydrobromic acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Hydrogen_bromide",
        "name": "Hydrogen bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Hypobromous_acid",
        "name": "Hypobromous acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iodine_monobromide",
        "name": "Iodine monobromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iron(II)_bromide",
        "name": "Iron(II) bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iron(III)_bromide",
        "name": "Iron(III) bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lead(II)_bromide",
        "name": "Lead(II) bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lithium_bromide",
        "name": "Lithium bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Magnesium_bromide",
        "name": "Magnesium bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Mercury(I)_bromide",
        "name": "Mercury(I) bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Mercury(II)_bromide",
        "name": "Mercury(II) bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Nitrosyl_bromide",
        "name": "Nitrosyl bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Phosphorus_pentabromide",
        "name": "Phosphorus pentabromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Phosphorus_tribromide",
        "name": "Phosphorus tribromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Phosphorus_heptabromide",
        "name": "Phosphorus heptabromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_bromide",
        "name": "Potassium bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_bromate",
        "name": "Potassium bromate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_perbromate",
        "name": "Potassium perbromate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tribromosilane",
        "name": "Tribromosilane"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Silicon_tetrabromide",
        "name": "Silicon tetrabromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Silver_bromide",
        "name": "Silver bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_bromide",
        "name": "Sodium bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_bromate",
        "name": "Sodium bromate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_perbromate",
        "name": "Sodium perbromate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Thionyl_bromide",
        "name": "Thionyl bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tin(II)_bromide",
        "name": "Tin(II) bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Zinc_bromide",
        "name": "Zinc bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Calcium_carbide",
        "name": "Calcium carbide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Calcium_carbonate",
        "name": "Calcium carbonate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Calcium_chlorate",
        "name": "Calcium chlorate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Calcium_chloride",
        "name": "Calcium chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Calcium_chromate",
        "name": "Calcium chromate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Calcium_cyanamide",
        "name": "Calcium cyanamide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Calcium_fluoride",
        "name": "Calcium fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Calcium_hydride",
        "name": "Calcium hydride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Calcium_hydroxide",
        "name": "Calcium hydroxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Calcium_monosilicide",
        "name": "Calcium monosilicide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Calcium_oxalate",
        "name": "Calcium oxalate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Calcium_hydroxychloride",
        "name": "Calcium hydroxychloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Calcium_perchlorate",
        "name": "Calcium perchlorate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Calcium_permanganate",
        "name": "Calcium permanganate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Calcium_sulfate",
        "name": "Calcium sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Gypsum",
        "name": "gypsum"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Carbon_dioxide",
        "name": "Carbon dioxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Carbon_disulfide",
        "name": "Carbon disulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Carbon_monoxide",
        "name": "Carbon monoxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Carbon_tetrabromide",
        "name": "Carbon tetrabromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Carbon_tetrachloride",
        "name": "Carbon tetrachloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Carbon_tetrafluoride",
        "name": "Carbon tetrafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Carbon_tetraiodide",
        "name": "Carbon tetraiodide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Carbonic_acid",
        "name": "Carbonic acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Carbonyl_chloride",
        "name": "Carbonyl chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Carbonyl_fluoride",
        "name": "Carbonyl fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Carbonyl_sulfide",
        "name": "Carbonyl sulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Carboplatin",
        "name": "Carboplatin"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Cerium(III)_oxide",
        "name": "Cerium(III) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Cerium(III)_sulfate",
        "name": "Cerium(III) sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Cerium(III)_sulfide",
        "name": "Cerium(III) sulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Cerium_hydroxide",
        "name": "Cerium(IV) hydroxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Cerium(IV)_nitrate",
        "name": "Cerium(IV) nitrate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Cerium(IV)_oxide",
        "name": "Cerium(IV) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Cerium(IV)_sulfate",
        "name": "Cerium(IV) sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Cerium_oxide",
        "name": "Cerium(III,IV) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Aluminium_chloride",
        "name": "Aluminium chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ammonium_chloride",
        "name": "Ammonium chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Antimony(III)_chloride",
        "name": "Antimony(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Antimony(V)_chloride",
        "name": "Antimony(V) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Arsenic(III)_chloride",
        "name": "Arsenic(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Barium_chloride",
        "name": "Barium chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Beryllium_chloride",
        "name": "Beryllium chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Bismuth(III)_chloride",
        "name": "Bismuth(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Boron_trichloride",
        "name": "Boron trichloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Bromine_monochloride",
        "name": "Bromine monochloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Cadmium_chloride",
        "name": "Cadmium chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Caesium_chloride",
        "name": "Caesium chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Calcium_chloride",
        "name": "Calcium chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Calcium_hypochlorite",
        "name": "Calcium hypochlorite"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Carbon_tetrachloride",
        "name": "Carbon tetrachloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Cerium(III)_chloride",
        "name": "Cerium(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Chloramine",
        "name": "Chloramine"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Chloric_acid",
        "name": "Chloric acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Chlorine_azide",
        "name": "Chlorine azide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Chlorine_dioxide",
        "name": "Chlorine dioxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Chlorine_dioxide",
        "name": "Chlorine dioxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Chlorine_monofluoride",
        "name": "Chlorine monofluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Chlorine_monoxide",
        "name": "Chlorine monoxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Chlorine_pentafluoride",
        "name": "Chlorine pentafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Chlorine_perchlorate",
        "name": "Chlorine perchlorate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Chlorine_tetroxide",
        "name": "Chlorine tetroxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Chlorine_trifluoride",
        "name": "Chlorine trifluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Chlorine_trifluoride",
        "name": "Chlorine trifluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Chlorine_trioxide",
        "name": "Chlorine trioxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Chlorine_trioxide",
        "name": "Chlorine trioxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Chloroplatinic_acid",
        "name": "Chloroplatinic acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Chlorosulfonic_acid",
        "name": "Chlorosulfonic acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Chlorosulfonyl_isocyanate",
        "name": "Chlorosulfonyl isocyanate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Chloryl_fluoride",
        "name": "Chloryl fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Chromium(II)_chloride",
        "name": "Chromium(II) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Chromium(III)_chloride",
        "name": "Chromium(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Chromyl_chloride",
        "name": "Chromyl chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Cisplatin",
        "name": "Cisplatin"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Cobalt(II)_chloride",
        "name": "Cobalt(II) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Copper(I)_chloride",
        "name": "Copper(I) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Copper(II)_chloride",
        "name": "Copper(II) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Curium(III)_chloride",
        "name": "Curium(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Cyanogen_chloride",
        "name": "Cyanogen chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Dichlorine_dioxide",
        "name": "Dichlorine dioxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Dichlorine_heptaoxide",
        "name": "Dichlorine heptaoxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Dichlorine_heptoxide",
        "name": "Dichlorine heptoxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Dichlorine_hexoxide",
        "name": "Dichlorine hexoxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Dichlorine_monoxide",
        "name": "Dichlorine monoxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Dichlorine_monoxide",
        "name": "Dichlorine monoxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Dichlorine_tetroxide",
        "name": "Dichlorine tetroxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Dichlorine_trioxide",
        "name": "Dichlorine trioxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Dichlorosilane",
        "name": "Dichlorosilane"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Disulfur_dichloride",
        "name": "Disulfur dichloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Gold(I)_chloride",
        "name": "Gold(I) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Gold(III)_chloride",
        "name": "Gold(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Hydrochloric_acid",
        "name": "Hydrochloric acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Hydrogen_chloride",
        "name": "Hydrogen chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Hypochlorous_acid",
        "name": "Hypochlorous acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Indium(I)_chloride",
        "name": "Indium(I) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Indium(III)_chloride",
        "name": "Indium(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iodine_monochloride",
        "name": "Iodine monochloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iridium(III)_chloride",
        "name": "Iridium(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iron(II)_chloride",
        "name": "Iron(II) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iron(III)_chloride",
        "name": "Iron(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lanthanum_chloride",
        "name": "Lanthanum chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lead(II)_chloride",
        "name": "Lead(II) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lithium_chloride",
        "name": "Lithium chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lithium_perchlorate",
        "name": "Lithium perchlorate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lutetium_chloride",
        "name": "Lutetium chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Magnesium_chloride",
        "name": "Magnesium chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Magnesium_perchlorate",
        "name": "Magnesium perchlorate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Manganese(II)_chloride",
        "name": "Manganese(II) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Mercury(I)_chloride",
        "name": "Mercury(I) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Mercury(II)_chloride",
        "name": "Mercury(II) chloride"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Mercury(II)_perchlorate&action=edit&redlink=1",
        "name": "Mercury(II) perchlorate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Molybdenum(III)_chloride",
        "name": "Molybdenum(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Molybdenum(V)_chloride",
        "name": "Molybdenum(V) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Neodymium(III)_chloride",
        "name": "Neodymium(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Neptunium(IV)_chloride&action=edit&redlink=1",
        "name": "Neptunium(IV) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Nickel(II)_chloride",
        "name": "Nickel(II) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Niobium_oxide_trichloride",
        "name": "Niobium oxide trichloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Niobium(IV)_chloride",
        "name": "Niobium(IV) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Niobium(V)_chloride",
        "name": "Niobium(V) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Nitrogen_trichloride",
        "name": "Nitrogen trichloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Nitrosyl_chloride",
        "name": "Nitrosyl chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Nitryl_chloride",
        "name": "Nitryl chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Osmium(III)_chloride",
        "name": "Osmium(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Palladium(II)_chloride",
        "name": "Palladium(II) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Perchloric_acid",
        "name": "Perchloric acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Perchloryl_fluoride",
        "name": "Perchloryl fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Phosgene",
        "name": "Phosgene"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Phosphonitrilic_chloride_trimer",
        "name": "Phosphonitrilic chloride trimer"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Phosphorus_oxychloride",
        "name": "Phosphorus oxychloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Phosphorus_pentachloride",
        "name": "Phosphorus pentachloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Phosphorus_trichloride",
        "name": "Phosphorus trichloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Platinum(II)_chloride",
        "name": "Platinum(II) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Platinum(IV)_chloride",
        "name": "Platinum(IV) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Plutonium(III)_chloride",
        "name": "Plutonium(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_chlorate",
        "name": "Potassium chlorate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_chloride",
        "name": "Potassium chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_perchlorate",
        "name": "Potassium perchlorate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Praseodymium(III)_chloride",
        "name": "Praseodymium(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Protactinium(V)_chloride",
        "name": "Protactinium(V) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Radium_chloride",
        "name": "Radium chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Rhenium(III)_chloride",
        "name": "Rhenium(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Rhenium(V)_chloride",
        "name": "Rhenium(V) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Rhodium(III)_chloride",
        "name": "Rhodium(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Rubidium_chloride",
        "name": "Rubidium chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ruthenium(III)_chloride",
        "name": "Ruthenium(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Samarium(III)_chloride",
        "name": "Samarium(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Scandium_chloride",
        "name": "Scandium chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Selenium_dichloride",
        "name": "Selenium dichloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Selenium_tetrachloride",
        "name": "Selenium tetrachloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Silicon_tetrachloride",
        "name": "Silicon tetrachloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Silver_chloride",
        "name": "Silver chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Silver_perchlorate",
        "name": "Silver perchlorate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_chlorate",
        "name": "Sodium chlorate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_chloride",
        "name": "Sodium chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_chlorite",
        "name": "Sodium chlorite"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_hypochlorite",
        "name": "Sodium hypochlorite"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_perchlorate",
        "name": "Sodium perchlorate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Strontium_chloride",
        "name": "Strontium chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sulfur_dichloride",
        "name": "Sulfur dichloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sulfuryl_chloride",
        "name": "Sulfuryl chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tantalum(III)_chloride",
        "name": "Tantalum(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Tantalum(IV)_chloride&action=edit&redlink=1",
        "name": "Tantalum(IV) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tantalum(V)_chloride",
        "name": "Tantalum(V) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tellurium_tetrachloride",
        "name": "Tellurium tetrachloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Terbium(III)_chloride",
        "name": "Terbium(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tetrachloroauric_acid",
        "name": "Tetrachloroauric acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Thallium(I)_chloride",
        "name": "Thallium(I) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Thallium(III)_chloride",
        "name": "Thallium(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Thionyl_chloride",
        "name": "Thionyl chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Thiophosgene",
        "name": "Thiophosgene"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Thorium(IV)_chloride",
        "name": "Thorium(IV) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Thulium(III)_chloride",
        "name": "Thulium(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tin(II)_chloride",
        "name": "Tin(II) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tin(IV)_chloride",
        "name": "Tin(IV) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Titanium_tetrachloride",
        "name": "Titanium tetrachloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Titanium(III)_chloride",
        "name": "Titanium(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Trichlorosilane",
        "name": "Trichlorosilane"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Trigonal_bipyramidal",
        "name": "Trigonal bipyramidal"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tungsten(IV)_chloride",
        "name": "Tungsten(IV) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tungsten(V)_chloride",
        "name": "Tungsten(V) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tungsten(VI)_chloride",
        "name": "Tungsten(VI) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Uranium_hexachloride",
        "name": "Uranium hexachloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Uranium(III)_chloride",
        "name": "Uranium(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Uranium(IV)_chloride",
        "name": "Uranium(IV) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Uranium(V)_chloride",
        "name": "Uranium(V) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Uranyl_chloride",
        "name": "Uranyl chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Vanadium_oxytrichloride",
        "name": "Vanadium oxytrichloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Vanadium(II)_chloride",
        "name": "Vanadium(II) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Vanadium(III)_chloride",
        "name": "Vanadium(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Vanadium(IV)_chloride",
        "name": "Vanadium(IV) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ytterbium(III)_chloride",
        "name": "Ytterbium(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Yttrium_chloride",
        "name": "Yttrium chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Zinc_chloride",
        "name": "Zinc chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Zirconium(IV)_chloride",
        "name": "Zirconium(IV) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Chromic_acid",
        "name": "Chromic acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Chromium_trioxide",
        "name": "Chromium trioxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Chromic_acid",
        "name": "Chromic acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Chromium(II)_chloride",
        "name": "Chromium(II) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Chromium(II)_sulfate",
        "name": "Chromium(II) sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Chromium(III)_chloride",
        "name": "Chromium(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Chromium(III)_nitrate",
        "name": "Chromium(III) nitrate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Chromium(III)_oxide",
        "name": "Chromium(III) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Chromium(III)_sulfate",
        "name": "Chromium(III) sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Chromium(III)_telluride",
        "name": "Chromium(III) telluride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Chromium(IV)_oxide",
        "name": "Chromium(IV) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Chromium_pentafluoride",
        "name": "Chromium pentafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Chromyl_chloride",
        "name": "Chromyl chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Chromyl_fluoride",
        "name": "Chromyl fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Cobalt(II)_bromide",
        "name": "Cobalt(II) bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Cobalt(II)_carbonate",
        "name": "Cobalt(II) carbonate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Cobalt(II)_chloride",
        "name": "Cobalt(II) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Cobalt(II)_nitrate",
        "name": "Cobalt(II) nitrate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Cobalt(II)_sulfate",
        "name": "Cobalt(II) sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Cobalt(III)_fluoride",
        "name": "Cobalt(III) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Copper(I)_acetylide",
        "name": "Copper(I) acetylide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Copper(I)_chloride",
        "name": "Copper(I) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Copper(I)_fluoride",
        "name": "Copper(I) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Copper(I)_oxide",
        "name": "Copper(I) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Copper(I)_sulfate",
        "name": "Copper(I) sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Copper(I)_sulfide",
        "name": "Copper(I) sulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Copper(II)_azide",
        "name": "Copper(II) azide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Copper(II)_borate",
        "name": "Copper(II) borate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Copper(II)_carbonate",
        "name": "Copper(II) carbonate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Copper(II)_chloride",
        "name": "Copper(II) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Copper(II)_hydroxide",
        "name": "Copper(II) hydroxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Copper(II)_nitrate",
        "name": "Copper(II) nitrate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Copper(II)_oxide",
        "name": "Copper(II) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Copper(II)_sulfate",
        "name": "Copper(II) sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Copper(II)_sulfide",
        "name": "Copper(II) sulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Copper_oxychloride",
        "name": "Copper oxychloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tetramminecopper(II)_sulfate",
        "name": "Tetramminecopper(II) sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Curium(III)_chloride",
        "name": "Curium(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Curium(III)_oxide",
        "name": "Curium(III) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Curium(IV)_oxide",
        "name": "Curium(IV) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Curium_hydroxide",
        "name": "Curium hydroxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Cyanogen_bromide",
        "name": "Cyanogen bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Cyanogen_chloride",
        "name": "Cyanogen chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Cyanogen_iodide",
        "name": "Cyanogen iodide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Cyanogen",
        "name": "Cyanogen"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Cyanuric_chloride",
        "name": "Cyanuric chloride"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Cyanogen_thiocyanate&action=edit&redlink=1",
        "name": "Cyanogen thiocyanate"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Cyanogen_selenocyanate&action=edit&redlink=1",
        "name": "Cyanogen selenocyanate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Cyanogen_azide",
        "name": "Cyanogen azide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Disilane",
        "name": "Disilane"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Disulfur_dichloride",
        "name": "Disulfur dichloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Dysprosium(III)_chloride",
        "name": "Dysprosium(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Dysprosium_oxide",
        "name": "Dysprosium oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Dysprosium_titanate",
        "name": "Dysprosium titanate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Einsteinium(III)_bromide",
        "name": "Einsteinium(III) bromide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Einsteinium(III)_carbonate&action=edit&redlink=1",
        "name": "Einsteinium(III) carbonate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Einsteinium(III)_chloride",
        "name": "Einsteinium(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Einsteinium(III)_fluoride",
        "name": "Einsteinium(III) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Einsteinium(III)_iodide",
        "name": "Einsteinium(III) iodide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Einsteinium(III)_nitrate&action=edit&redlink=1",
        "name": "Einsteinium(III) nitrate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Einsteinium(III)_oxide",
        "name": "Einsteinium(III) oxide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Einsteinium(III)_phosphate&action=edit&redlink=1",
        "name": "Einsteinium(III) phosphate"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Einsteinium(III)_sulfate&action=edit&redlink=1",
        "name": "Einsteinium(III) sulfate"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Einsteinium(III)_sulfide&action=edit&redlink=1",
        "name": "Einsteinium(III) sulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Erbium(III)_chloride",
        "name": "Erbium(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Erbium-copper&action=edit&redlink=1",
        "name": "Erbium-copper"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Erbium-gold&action=edit&redlink=1",
        "name": "Erbium-gold"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Erbium(III)_oxide",
        "name": "Erbium(III) oxide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Erbium-silver&action=edit&redlink=1",
        "name": "Erbium-silver"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Erbium-Iridium&action=edit&redlink=1",
        "name": "Erbium-Iridium"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Europium(II)_chloride",
        "name": "Europium(II) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Europium(II)_sulfate",
        "name": "Europium(II) sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Europium(III)_bromide",
        "name": "Europium(III) bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Europium(III)_chloride",
        "name": "Europium(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Europium(III)_iodate",
        "name": "Europium(III) iodate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Europium(III)_iodide",
        "name": "Europium(III) iodide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Europium(III)_nitrate",
        "name": "Europium(III) nitrate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Europium(III)_oxide",
        "name": "Europium(III) oxide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Europium(III)_perchlorate&action=edit&redlink=1",
        "name": "Europium(III) perchlorate"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Europium(III)_sulfate&action=edit&redlink=1",
        "name": "Europium(III) sulfate"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Europium(III)_vanadate&action=edit&redlink=1",
        "name": "Europium(III) vanadate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Fluoroantimonic_acid",
        "name": "Fluoroantimonic acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tetrafluorohydrazine",
        "name": "Tetrafluorohydrazine"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Trifluoromethylisocyanide",
        "name": "Trifluoromethylisocyanide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Trifluoromethanesulfonic_acid",
        "name": "Trifluoromethanesulfonic acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Aluminium_fluoride",
        "name": "AlF3"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Americium(III)_fluoride",
        "name": "AmF3"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ammonium_fluoride",
        "name": "NH4F"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ammonium_hydrogen_fluoride",
        "name": "NH4HF2"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ammonium_tetrafluoroborate",
        "name": "NH4BF4"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Antimony_pentafluoride",
        "name": "SbF5"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Antimony_trifluoride",
        "name": "SbF3"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Arsenic_pentafluoride",
        "name": "AsF5"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Arsenic_trifluoride",
        "name": "AsF3"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Barium_fluoride",
        "name": "BaF2"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Beryllium_fluoride",
        "name": "BeF2"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Bismuth(III)_fluoride",
        "name": "BiF3"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Bis(pentafluorosulfanyl)_peroxide&action=edit&redlink=1",
        "name": "F5SOOSF5"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Boron_trifluoride",
        "name": "BF3"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Bromine_pentafluoride",
        "name": "BrF5"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Bromine_trifluoride",
        "name": "BrF3"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Bromine_monofluoride",
        "name": "BrF"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Cadmium_fluoride",
        "name": "CdF2"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Caesium_fluoride",
        "name": "CsF"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Calcium_fluoride",
        "name": "CaF2"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Carbon_tetrafluoride",
        "name": "CF4"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Carbonyl_fluoride",
        "name": "COF2"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Cerium(III)_fluoride",
        "name": "CeF3"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Cerium(IV)_fluoride",
        "name": "CeF4"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Chlorine_pentafluoride",
        "name": "ClF5"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Chlorine_trifluoride",
        "name": "ClF3"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Chlorine_monofluoride",
        "name": "ClF"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Chromium(III)_fluoride",
        "name": "CrF3"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Chromium(V)_fluoride",
        "name": "CrF5"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Chromyl_fluoride",
        "name": "CrO2F2"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Cobalt(II)_fluoride",
        "name": "CoF2"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Cobalt(III)_fluoride",
        "name": "CoF3"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Copper(I)_fluoride",
        "name": "CuF"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Copper(II)_fluoride",
        "name": "CuF2"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Curium(III)_fluoride",
        "name": "CmF3"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Dinitrogen_difluoride",
        "name": "N2F2"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Dinitrogen_tetrafluoride",
        "name": "N2F4"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Dioxygen_difluoride",
        "name": "O2F2"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Diphosphorus_tetrafluoride",
        "name": "P2F4"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Disulfur_difluoride",
        "name": "S2F2"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Dysprosium(III)_fluoride",
        "name": "DyF3"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Erbium(III)_fluoride",
        "name": "ErF3"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Europium(III)_fluoride",
        "name": "EuF3"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Fluoroboric_acid",
        "name": "HBF4"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Fluorine_azide",
        "name": "FN3"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Fluorine_fluorosulfate&action=edit&redlink=1",
        "name": "FOSO2F"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Fluorine_nitrate",
        "name": "FNO3"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Fluorosulfonic_acid",
        "name": "FSO3H"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Gadolinium(III)_fluoride",
        "name": "GdF3"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Gallium(III)_fluoride",
        "name": "GaF3"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Germanium_tetrafluoride",
        "name": "GeF4"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Gold(III)_fluoride",
        "name": "AuF3"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Hafnium(IV)_fluoride",
        "name": "HfF4"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Hexafluoroantimonic_acid",
        "name": "H2SbF6"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Hexafluorophosphoric_acid",
        "name": "HPF6"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Hexafluorosilicic_acid",
        "name": "H2SiF6"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Hexafluorotitanic_acid",
        "name": "H2TiF6"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Hydrogen_fluoride",
        "name": "HF"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Hydrofluoric_acid",
        "name": "HF(aq)"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Hypofluorous_acid",
        "name": "HFO"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Indium(III)_fluoride",
        "name": "InF3"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iodine_heptafluoride",
        "name": "IF7"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iodine_monofluoride",
        "name": "IF"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iodine_pentafluoride",
        "name": "IF5"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iridium(III)_fluoride",
        "name": "IrF3"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iridium(VI)_fluoride",
        "name": "IrF6"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iron(II)_fluoride",
        "name": "FeF2"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iron(III)_fluoride",
        "name": "FeF3"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Krypton_difluoride",
        "name": "KrF2"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lanthanum_fluoride",
        "name": "LaF3"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lead(II)_fluoride",
        "name": "PbF2"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lead(IV)_fluoride",
        "name": "PbF4"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lithium_fluoride",
        "name": "LiF"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Magnesium_fluoride",
        "name": "MgF2"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Manganese(II)_fluoride",
        "name": "MnF2"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Manganese(III)_fluoride",
        "name": "MnF3"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Manganese(IV)_fluoride",
        "name": "MnF4"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Mercury(I)_fluoride",
        "name": "Hg2F2"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Mercury(II)_fluoride",
        "name": "HgF2"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Molybdenum(III)_fluoride&action=edit&redlink=1",
        "name": "MoF3"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Molybdenum(V)_fluoride",
        "name": "MoF5"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Molybdenum(VI)_fluoride",
        "name": "MoF6"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Niobium(IV)_fluoride",
        "name": "NbF4"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Niobium(V)_fluoride",
        "name": "NbF5"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Neodymium(III)_fluoride",
        "name": "NdF3"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Nickel(II)_fluoride",
        "name": "NiF2"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Neptunium(IV)_fluoride",
        "name": "NpF4"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Neptunium(V)_fluoride",
        "name": "NpF5"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Neptunium(VI)_fluoride",
        "name": "NpF6"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Nitrogen_oxide_trifluoride",
        "name": "ONF3"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Nitrogen_trifluoride",
        "name": "NF3"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Nitronium_tetrafluoroborate",
        "name": "NO2BF4"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Nitrosonium_tetrafluoroborate",
        "name": "NOBF4"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Nitrosyl_fluoride",
        "name": "NOF"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Nitryl_fluoride",
        "name": "NO2F"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Osmium(IV)_fluoride",
        "name": "OsF4"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Osmium(VI)_fluoride",
        "name": "OsF6"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Osmium(VII)_fluoride",
        "name": "OsF7"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Oxygen_difluoride",
        "name": "OF2"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Palladium(II)_fluoride",
        "name": "PdF2"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Palladium(IV)_fluoride",
        "name": "PdF4"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Peroxydisulfuryl_difluoride&action=edit&redlink=1",
        "name": "FSO2OOSO2F"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Phosphorus_oxyfluoride",
        "name": "POF3"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Phosphorus_pentafluoride",
        "name": "PF5"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Phosphorus_trifluoride",
        "name": "PF3"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Platinum(II)_fluoride",
        "name": "PtF2"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Platinum(IV)_fluoride",
        "name": "PtF4"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Platinum(VI)_fluoride",
        "name": "PtF6"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Plutonium(III)_fluoride",
        "name": "PuF3"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Plutonium(IV)_fluoride",
        "name": "PuF4"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Plutonium(VI)_fluoride",
        "name": "PuF6"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_fluoride",
        "name": "KF"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_hexafluorophosphate",
        "name": "KPF6"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_tetrafluoroborate",
        "name": "KBF4"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Praseodymium(III)_fluoride",
        "name": "PrF3"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Protactinium(V)_fluoride",
        "name": "PaF5"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Radium_fluoride",
        "name": "RaF2"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Radon_difluoride",
        "name": "RnF2"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Rhenium(IV)_fluoride",
        "name": "ReF4"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Rhenium(VI)_fluoride",
        "name": "ReF6"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Rhenium(VII)_fluoride",
        "name": "ReF7"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Rhodium(III)_fluoride",
        "name": "RhF3"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Rubidium_fluoride",
        "name": "RbF"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ruthenium(III)_fluoride",
        "name": "RuF3"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ruthenium(IV)_fluoride",
        "name": "RuF4"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ruthenium(VI)_fluoride",
        "name": "RuF6"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Samarium(III)_fluoride",
        "name": "SmF3"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Scandium_fluoride",
        "name": "ScF3"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Selenium_hexafluoride",
        "name": "SeF6"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Selenium_tetrafluoride",
        "name": "SeF4"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Silicon_tetrafluoride",
        "name": "SiF4"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Silver(I)_fluoride",
        "name": "AgF"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Silver(II)_fluoride",
        "name": "AgF2"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Silver(I)_tetrafluoroborate&action=edit&redlink=1",
        "name": "AgBF4"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_fluoride",
        "name": "NaF"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Sodium_fluorosulfate&action=edit&redlink=1",
        "name": "NaFSO3"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_hexafluoroaluminate",
        "name": "Na3AlF6"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Sodium_hexafluoroantimonate&action=edit&redlink=1",
        "name": "NaSbF6"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_hexafluorophosphate",
        "name": "NaPF6"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_hexafluorosilicate",
        "name": "Na2SiF6"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_hexafluorotitanate",
        "name": "Na2TiF6"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_tetrafluoroborate",
        "name": "NaBF4"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Strontium_fluoride",
        "name": "SrF2"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sulfur_difluoride",
        "name": "SF2"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sulfur_hexafluoride",
        "name": "SF6"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sulfur_tetrafluoride",
        "name": "SF4"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sulfuryl_fluoride",
        "name": "SO2F2"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tantalum(V)_fluoride",
        "name": "TaF5"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Technetium_hexafluoride",
        "name": "TcF6"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tellurium_hexafluoride",
        "name": "TeF6"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tellurium_tetrafluoride",
        "name": "TeF4"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Thallium(I)_fluoride",
        "name": "TlF"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Thallium(III)_fluoride",
        "name": "TlF3"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Thionyl_fluoride",
        "name": "SOF2"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Thorium(IV)_fluoride",
        "name": "ThF4"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tin(II)_fluoride",
        "name": "SnF2"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tin(IV)_fluoride",
        "name": "SnF4"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Titanium(III)_fluoride",
        "name": "TiF3"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Titanium_tetrafluoride",
        "name": "TiF4"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Trifluorosilane",
        "name": "HSiF3"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tungsten_hexafluoride",
        "name": "WF6"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Uranium(IV)_fluoride",
        "name": "UF4"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Uranium(V)_fluoride",
        "name": "UF5"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Uranium(VI)_fluoride",
        "name": "UF6"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Uranyl_fluoride",
        "name": "UO2F2"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Vanadium(III)_fluoride",
        "name": "VF3"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Vanadium(IV)_fluoride",
        "name": "VF4"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Vanadium(V)_fluoride",
        "name": "VF5"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Xenon_difluoride",
        "name": "XeF2"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Xenon_dioxide_difluoride&action=edit&redlink=1",
        "name": "XeO2F2"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Xenon_hexafluoride",
        "name": "XeF6"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Xenon_hexafluoroplatinate",
        "name": "XePtF6"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Xenon_tetrafluoride",
        "name": "XeF4"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ytterbium(III)_fluoride",
        "name": "YbF3"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Yttrium_fluoride",
        "name": "YF3"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Zinc_fluoride",
        "name": "ZnF2"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Zirconium(IV)_fluoride",
        "name": "ZrF4"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Francium_oxide&action=edit&redlink=1",
        "name": "Francium oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Francium_chloride",
        "name": "Francium chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Francium_bromide",
        "name": "Francium bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Francium_iodide",
        "name": "Francium iodide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Francium_carbonate&action=edit&redlink=1",
        "name": "Francium carbonate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Francium_hydroxide",
        "name": "Francium hydroxide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Francium_sulfate&action=edit&redlink=1",
        "name": "Francium sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Gadolinium(III)_chloride",
        "name": "Gadolinium(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Gadolinium(III)_oxide",
        "name": "Gadolinium(III) oxide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Gadolinium(III)_carbonate&action=edit&redlink=1",
        "name": "Gadolinium(III) carbonate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Gadolinium(III)_chloride",
        "name": "Gadolinium(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Gadolinium(III)_fluoride",
        "name": "Gadolinium(III) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Gadolinium_gallium_garnet",
        "name": "Gadolinium gallium garnet"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Gadolinium(III)_nitrate",
        "name": "Gadolinium(III) nitrate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Gadolinium(III)_oxide",
        "name": "Gadolinium(III) oxide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Gadolinium(III)_phosphate&action=edit&redlink=1",
        "name": "Gadolinium(III) phosphate"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Gadolinium(III)_sulfate&action=edit&redlink=1",
        "name": "Gadolinium(III) sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Gallium_antimonide",
        "name": "Gallium antimonide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Gallium_arsenide",
        "name": "Gallium arsenide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Gallium(III)_fluoride",
        "name": "Gallium(III) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Gallium_trichloride",
        "name": "Gallium trichloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Gallium_nitride",
        "name": "Gallium nitride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Gallium_phosphide",
        "name": "Gallium phosphide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Gallium(II)_sulfide",
        "name": "Gallium(II) sulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Gallium(III)_sulfide",
        "name": "Gallium(III) sulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Digermane",
        "name": "Digermane"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Germane",
        "name": "Germane"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Germanium(II)_bromide",
        "name": "Germanium(II) bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Germanium(II)_chloride",
        "name": "Germanium(II) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Germanium(II)_fluoride",
        "name": "Germanium(II) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Germanium(II)_iodide",
        "name": "Germanium(II) iodide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Germanium(II)_oxide",
        "name": "Germanium(II) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Germanium(II)_selenide",
        "name": "Germanium(II) selenide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Germanium(II)_sulfide",
        "name": "Germanium(II) sulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Germanium(IV)_bromide",
        "name": "Germanium(IV) bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Germanium(IV)_chloride",
        "name": "Germanium(IV) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Germanium(IV)_fluoride",
        "name": "Germanium(IV) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Germanium(IV)_iodide",
        "name": "Germanium(IV) iodide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Germanium(IV)_nitride",
        "name": "Germanium(IV) nitride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Germanium(IV)_oxide",
        "name": "Germanium(IV) oxide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Germanium(IV)_selenide&action=edit&redlink=1",
        "name": "Germanium(IV) selenide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Germanium(IV)_sulfide",
        "name": "Germanium(IV) sulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Germanium_difluoride",
        "name": "Germanium difluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Germanium_dioxide",
        "name": "Germanium dioxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Germanium_tetrachloride",
        "name": "Germanium tetrachloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Germanium_tetrafluoride",
        "name": "Germanium tetrafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Germanium_telluride",
        "name": "Germanium telluride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Gold(I)_bromide",
        "name": "Gold(I) bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Gold(I)_chloride",
        "name": "Gold(I) chloride"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Gold(I)cyanide&action=edit&redlink=1",
        "name": "Gold(I)cyanide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Gold(I)_hydride&action=edit&redlink=1",
        "name": "Gold(I) hydride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Gold(I)_iodide",
        "name": "Gold(I) iodide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Gold(I)_selenide&action=edit&redlink=1",
        "name": "Gold(I) selenide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Gold(I)_sulfide",
        "name": "Gold(I) sulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Gold(III)_bromide",
        "name": "Gold(III) bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Gold(III)_chloride",
        "name": "Gold(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Gold(III)_fluoride",
        "name": "Gold(III) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Gold(III)_iodide",
        "name": "Gold(III) iodide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Gold(III)_oxide",
        "name": "Gold(III) oxide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Gold(III)_selenide&action=edit&redlink=1",
        "name": "Gold(III) selenide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Gold(III)_sulfide",
        "name": "Gold(III) sulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Gold(III)_nitrate",
        "name": "Gold(III) nitrate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Gold(V)_fluoride",
        "name": "Gold(V) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Gold(I,III)_chloride",
        "name": "Gold(I,III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Gold_ditelluride&action=edit&redlink=1",
        "name": "Gold ditelluride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Gold_heptafluoride",
        "name": "Gold heptafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Hafnium(IV)_bromide",
        "name": "Hafnium(IV) bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Hafnium(IV)_carbide",
        "name": "Hafnium(IV) carbide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Hafnium(IV)_chloride",
        "name": "Hafnium(IV) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Hafnium(IV)_fluoride",
        "name": "Hafnium(IV) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Hafnium(IV)_iodide",
        "name": "Hafnium(IV) iodide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Hafnium(IV)_oxide",
        "name": "Hafnium(IV) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Hafnium(IV)_silicate",
        "name": "Hafnium(IV) silicate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Hafnium(IV)_sulfide",
        "name": "Hafnium(IV) sulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Hexadecacarbonylhexarhodium",
        "name": "Hexadecacarbonylhexarhodium"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Holmium(III)_carbonate&action=edit&redlink=1",
        "name": "Holmium(III) carbonate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Holmium(III)_chloride",
        "name": "Holmium(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Holmium(III)_fluoride",
        "name": "Holmium(III) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Holmium(III)_nitrate",
        "name": "Holmium(III) nitrate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Holmium(III)_oxide",
        "name": "Holmium(III) oxide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Holmium(III)_phosphate&action=edit&redlink=1",
        "name": "Holmium(III) phosphate"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Holmium(III)_sulfate&action=edit&redlink=1",
        "name": "Holmium(III) sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Hexafluorosilicic_acid",
        "name": "Hexafluorosilicic acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Hydrazine",
        "name": "Hydrazine"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Hydrazoic_acid",
        "name": "Hydrazoic acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Hydroiodic_acid",
        "name": "Hydroiodic acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Hydrogen_bromide",
        "name": "Hydrogen bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Hydrogen_chloride",
        "name": "Hydrogen chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Hydrogen_cyanide",
        "name": "Hydrogen cyanide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Hydrogen_fluoride",
        "name": "Hydrogen fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Hydrogen_peroxide",
        "name": "Hydrogen peroxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Hydrogen_selenide",
        "name": "Hydrogen selenide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Hydrogen_sulfide",
        "name": "Hydrogen sulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Hydrogen_telluride",
        "name": "Hydrogen telluride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Hydroxylamine",
        "name": "Hydroxylamine"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Hypobromous_acid",
        "name": "Hypobromous acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Hypochlorous_acid",
        "name": "Hypochlorous acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Hypophosphorous_acid",
        "name": "Hypophosphorous acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Metaphosphoric_acid",
        "name": "Metaphosphoric acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Protonated_molecular_hydrogen",
        "name": "Protonated molecular hydrogen"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Trioxidane",
        "name": "Trioxidane"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Water",
        "name": "Water"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_helide",
        "name": "Sodium helide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Indium(I)_bromide",
        "name": "Indium(I) bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Indium(III)_bromide",
        "name": "Indium(III) bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Indium(III)_chloride",
        "name": "Indium(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Indium(III)_fluoride",
        "name": "Indium(III) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Indium(III)_oxide",
        "name": "Indium(III) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Indium(III)_sulfate",
        "name": "Indium(III) sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Indium_antimonide",
        "name": "Indium antimonide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Indium_arsenide",
        "name": "Indium arsenide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Indium_nitride",
        "name": "Indium nitride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Indium_phosphide",
        "name": "Indium phosphide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Indium_halides#InI",
        "name": "Indium(I) iodide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Indium(III)_nitrate",
        "name": "Indium(III) nitrate"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Indium(I)_oxide&action=edit&redlink=1",
        "name": "Indium(I) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Indium(III)_selenide",
        "name": "Indium(III) selenide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Indium(III)_sulfide",
        "name": "Indium(III) sulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Trimethylindium",
        "name": "Trimethylindium"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iodic_acid",
        "name": "Iodic acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iodine_heptafluoride",
        "name": "Iodine heptafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iodine_pentafluoride",
        "name": "Iodine pentafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iodine_monochloride",
        "name": "Iodine monochloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iodine_trichloride",
        "name": "Iodine trichloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Periodic_acid",
        "name": "Periodic acid"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Iodine_pentachloride&action=edit&redlink=1",
        "name": "Iodine pentachloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iodine_tribromide",
        "name": "Iodine tribromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iridium(IV)_chloride",
        "name": "Iridium(IV) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iridium(V)_fluoride",
        "name": "Iridium(V) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iridium_hexafluoride",
        "name": "Iridium hexafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iridium_tetrafluoride",
        "name": "Iridium tetrafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Columbite",
        "name": "Columbite"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iron(II)_chloride",
        "name": "Iron(II) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iron(II)_oxalate",
        "name": "Iron(II) oxalate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iron(II)_oxide",
        "name": "Iron(II) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iron(II)_selenate",
        "name": "Iron(II) selenate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iron(II)_sulfate",
        "name": "Iron(II) sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iron(III)_chloride",
        "name": "Iron(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iron(III)_fluoride",
        "name": "Iron(III) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iron(III)_oxalate",
        "name": "Iron(III) oxalate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iron(III)_oxide",
        "name": "Iron(III) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iron(III)_nitrate",
        "name": "Iron(III) nitrate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iron(III)_sulfate",
        "name": "Iron(III) sulfate"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Iron(III)_thiocyanate&action=edit&redlink=1",
        "name": "Iron(III) thiocyanate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iron(II,III)_oxide",
        "name": "Iron(II,III) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iron_ferrocyanide",
        "name": "Iron ferrocyanide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Prussian_blue",
        "name": "Prussian blue"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ammonium_iron(II)_sulfate",
        "name": "Ammonium iron(II) sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iron(II)_bromide",
        "name": "Iron(II) bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iron(III)_bromide",
        "name": "Iron(III) bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iron(II)_chloride",
        "name": "Iron(II) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iron(III)_chloride",
        "name": "Iron(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iron_disulfide",
        "name": "Iron disulfide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Iron_dodecacarbonyl&action=edit&redlink=1",
        "name": "Iron dodecacarbonyl"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iron(III)_fluoride",
        "name": "Iron(III) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iron(II)_iodide",
        "name": "Iron(II) iodide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Iron_naphthenate&action=edit&redlink=1",
        "name": "Iron naphthenate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iron(III)_nitrate",
        "name": "Iron(III) nitrate"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Iron_nonacarbonyl&action=edit&redlink=1",
        "name": "Iron nonacarbonyl"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iron(II)_oxalate",
        "name": "Iron(II) oxalate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iron(II,III)_oxide",
        "name": "Iron(II,III) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iron(III)_oxide",
        "name": "Iron(III) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iron_pentacarbonyl",
        "name": "Iron pentacarbonyl"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Iron(III)_perchlorate&action=edit&redlink=1",
        "name": "Iron(III) perchlorate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iron(III)_phosphate",
        "name": "Iron(III) phosphate"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Iron(II)_sulfamate&action=edit&redlink=1",
        "name": "Iron(II) sulfamate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iron(II)_sulfate",
        "name": "Iron(II) sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iron(III)_sulfate",
        "name": "Iron(III) sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iron(II)_sulfide",
        "name": "Iron(II) sulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Krypton_difluoride",
        "name": "Krypton difluoride"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Lanthanum_aluminium&action=edit&redlink=1",
        "name": "Lanthanum aluminium"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Lanthanum_cadmium&action=edit&redlink=1",
        "name": "Lanthanum cadmium"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lanthanum_carbonate",
        "name": "Lanthanum carbonate"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Lanthanum_magnesium&action=edit&redlink=1",
        "name": "Lanthanum magnesium"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lanthanum_manganite",
        "name": "Lanthanum manganite"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Lanthanum_mercury&action=edit&redlink=1",
        "name": "Lanthanum mercury"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Lanthanum_silver&action=edit&redlink=1",
        "name": "Lanthanum silver"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Lanthanum_thallium&action=edit&redlink=1",
        "name": "Lanthanum thallium"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Lanthanum_zinc&action=edit&redlink=1",
        "name": "Lanthanum zinc"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lanthanum_boride",
        "name": "Lanthanum boride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lanthanum_carbonate",
        "name": "Lanthanum carbonate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lanthanum(III)_chloride",
        "name": "Lanthanum(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lanthanum_trifluoride",
        "name": "Lanthanum trifluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lanthanum(III)_oxide",
        "name": "Lanthanum(III) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lanthanum(III)_nitrate",
        "name": "Lanthanum(III) nitrate"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Lanthanum(III)_phosphate&action=edit&redlink=1",
        "name": "Lanthanum(III) phosphate"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Lanthanum(III)_sulfate&action=edit&redlink=1",
        "name": "Lanthanum(III) sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lead(II)_azide",
        "name": "Lead(II) azide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lead(II)_bromide",
        "name": "Lead(II) bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lead(II)_carbonate",
        "name": "Lead(II) carbonate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lead(II)_chloride",
        "name": "Lead(II) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lead(II)_fluoride",
        "name": "Lead(II) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lead(II)_hydroxide",
        "name": "Lead(II) hydroxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lead(II)_iodide",
        "name": "Lead(II) iodide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lead(II)_nitrate",
        "name": "Lead(II) nitrate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lead(II)_oxide",
        "name": "Lead(II) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lead(II)_phosphate",
        "name": "Lead(II) phosphate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lead(II)_sulfate",
        "name": "Lead(II) sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lead(II)_selenide",
        "name": "Lead(II) selenide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lead(II)_sulfide",
        "name": "Lead(II) sulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lead(II)_telluride",
        "name": "Lead(II) telluride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lead(II)_thiocyanate",
        "name": "Lead(II) thiocyanate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lead(II,IV)_oxide",
        "name": "Lead(II,IV) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lead(IV)_oxide",
        "name": "Lead(IV) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lead(IV)_sulfide",
        "name": "Lead(IV) sulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lead_hydrogen_arsenate",
        "name": "Lead hydrogen arsenate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lead_styphnate",
        "name": "Lead styphnate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lead_tetrachloride",
        "name": "Lead tetrachloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lead_tetrafluoride",
        "name": "Lead tetrafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lead_tetroxide",
        "name": "Lead tetroxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lead_titanate",
        "name": "Lead titanate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lead_zirconate_titanate",
        "name": "Lead zirconate titanate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lead_zirconium_titanate",
        "name": "lead zirconium titanate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Plumbane",
        "name": "Plumbane"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lithium_tetrachloroaluminate",
        "name": "Lithium tetrachloroaluminate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lithium_aluminium_hydride",
        "name": "Lithium aluminium hydride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lithium_bromide",
        "name": "Lithium bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lithium_borohydride",
        "name": "Lithium borohydride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lithium_carbonate",
        "name": "Lithium carbonate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lithium_salt",
        "name": "Lithium salt"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lithium_chloride",
        "name": "Lithium chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lithium_hypochlorite",
        "name": "Lithium hypochlorite"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lithium_chlorate",
        "name": "Lithium chlorate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lithium_perchlorate",
        "name": "Lithium perchlorate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lithium_cobalt_oxide",
        "name": "Lithium cobalt oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lithium_oxide",
        "name": "Lithium oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lithium_peroxide",
        "name": "Lithium peroxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lithium_hydride",
        "name": "Lithium hydride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lithium_hydroxide",
        "name": "Lithium hydroxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lithium_iodide",
        "name": "Lithium iodide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lithium_iron_phosphate",
        "name": "Lithium iron phosphate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lithium_nitrate",
        "name": "Lithium nitrate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lithium_sulfide",
        "name": "Lithium sulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lithium_sulfite",
        "name": "Lithium sulfite"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lithium_sulfate",
        "name": "Lithium sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lithium_superoxide",
        "name": "Lithium superoxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lithium_hexafluorophosphate",
        "name": "Lithium hexafluorophosphate"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Magnesium_antimonide&action=edit&redlink=1",
        "name": "Magnesium antimonide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Magnesium_bromide",
        "name": "Magnesium bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Magnesium_carbonate",
        "name": "Magnesium carbonate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Magnesium_chloride",
        "name": "Magnesium chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Magnesium_citrate",
        "name": "Magnesium citrate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Magnesium_oxide",
        "name": "Magnesium oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Magnesium_perchlorate",
        "name": "Magnesium perchlorate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Magnesium_phosphate",
        "name": "Magnesium phosphate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Magnesium_sulfate",
        "name": "Magnesium sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Magnesium_bicarbonate",
        "name": "Magnesium bicarbonate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Magnesium_boride",
        "name": "Magnesium boride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Magnesium_bromide",
        "name": "Magnesium bromide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Magnesium_carbide&action=edit&redlink=1",
        "name": "Magnesium carbide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Magnesium_carbonate",
        "name": "Magnesium carbonate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Magnesium_chloride",
        "name": "Magnesium chloride"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Magnesium_cyanamide&action=edit&redlink=1",
        "name": "Magnesium cyanamide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Magnesium_fluoride",
        "name": "Magnesium fluoride"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Magnesium_fluorophosphate&action=edit&redlink=1",
        "name": "Magnesium fluorophosphate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Magnesium_gluconate",
        "name": "Magnesium gluconate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Magnesium_hydride",
        "name": "Magnesium hydride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Dimagnesium_phosphate",
        "name": "Dimagnesium phosphate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Magnesium_hydroxide",
        "name": "Magnesium hydroxide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Magnesium_hypochlorite&action=edit&redlink=1",
        "name": "Magnesium hypochlorite"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Magnesium_iodide",
        "name": "Magnesium iodide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Magnesium_molybdate&action=edit&redlink=1",
        "name": "Magnesium molybdate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Magnesium_nitrate",
        "name": "Magnesium nitrate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Magnesium_oxalate",
        "name": "Magnesium oxalate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Magnesium_peroxide",
        "name": "Magnesium peroxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Magnesium_phosphate",
        "name": "Magnesium phosphate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Magnesium_silicate",
        "name": "Magnesium silicate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Magnesium_sulfate",
        "name": "Magnesium sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Magnesium_sulfide",
        "name": "Magnesium sulfide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Magnesium_titanate&action=edit&redlink=1",
        "name": "Magnesium titanate"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Magnesium_tungstate&action=edit&redlink=1",
        "name": "Magnesium tungstate"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Magnesium_zirconate&action=edit&redlink=1",
        "name": "Magnesium zirconate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Manganese(II)_bromide",
        "name": "Manganese(II) bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Manganese(II)_chloride",
        "name": "Manganese(II) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Manganese(II)_hydroxide",
        "name": "Manganese(II) hydroxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Manganese(II)_oxide",
        "name": "Manganese(II) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Manganese(II)_phosphate",
        "name": "Manganese(II) phosphate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Manganese(II)_sulfate",
        "name": "Manganese(II) sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Manganese(II)_sulfate_monohydrate",
        "name": "Manganese(II) sulfate monohydrate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Manganese(III)_chloride",
        "name": "Manganese(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Manganese(III)_oxide",
        "name": "Manganese(III) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Manganese(IV)_fluoride",
        "name": "Manganese(IV) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Manganese(IV)_oxide",
        "name": "Manganese(IV) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Manganese(II,III)_oxide",
        "name": "Manganese(II,III) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Manganese_dioxide",
        "name": "Manganese dioxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Manganese_heptoxide",
        "name": "Manganese heptoxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Mercury(I)_chloride",
        "name": "Mercury(I) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Mercury(I)_sulfate",
        "name": "Mercury(I) sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Mercury(II)_chloride",
        "name": "Mercury(II) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Mercury(II)_hydride",
        "name": "Mercury(II) hydride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Mercury_selenide",
        "name": "Mercury(II) selenide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Mercury(II)_sulfate",
        "name": "Mercury(II) sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Mercury(II)_sulfide",
        "name": "Mercury(II) sulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Mercury_telluride",
        "name": "Mercury(II) telluride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Mercury(II)_thiocyanate",
        "name": "Mercury(II) thiocyanate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Mercury(IV)_fluoride",
        "name": "Mercury(IV) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Mercury_fulminate",
        "name": "Mercury fulminate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Molybdenum(II)_bromide",
        "name": "Molybdenum(II) bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Molybdenum(II)_chloride",
        "name": "Molybdenum(II) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Molybdenum(III)_bromide",
        "name": "Molybdenum(III) bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Molybdenum(III)_chloride",
        "name": "Molybdenum(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Molybdenum(IV)_carbide&action=edit&redlink=1",
        "name": "Molybdenum(IV) carbide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Molybdenum(IV)_chloride",
        "name": "Molybdenum(IV) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Molybdenum(IV)_fluoride",
        "name": "Molybdenum(IV) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Molybdenum(V)_chloride",
        "name": "Molybdenum(V) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Molybdenum(V)_fluoride",
        "name": "Molybdenum(V) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Molybdenum_disulfide",
        "name": "Molybdenum disulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Molybdenum_hexacarbonyl",
        "name": "Molybdenum hexacarbonyl"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Molybdenum_hexafluoride",
        "name": "Molybdenum hexafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Molybdenum_tetrachloride",
        "name": "Molybdenum tetrachloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Molybdenum_trioxide",
        "name": "Molybdenum trioxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Molybdic_acid",
        "name": "Molybdic acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Neodymium_acetate",
        "name": "Neodymium acetate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Neodymium_arsenate",
        "name": "Neodymium(III) arsenate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Neodymium(II)_chloride",
        "name": "Neodymium(II) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Neodymium(III)_chloride",
        "name": "Neodymium(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/NdFeB",
        "name": "Neodymium magnet"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Neodymium(II)_bromide",
        "name": "Neodymium(II) bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Neodymium(III)_bromide",
        "name": "Neodymium(III) bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Neodymium(III)_fluoride",
        "name": "Neodymium(III) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Neodymium(III)_hydride",
        "name": "Neodymium(III) hydride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Neodymium(II)_iodide",
        "name": "Neodymium(II) iodide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Neodymium(III)_iodide",
        "name": "Neodymium(III) iodide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Neodymium_molybdate",
        "name": "Neodymium molybdate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Neodymium_perrhenate",
        "name": "Neodymium perrhenate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Neodymium(III)_sulfide",
        "name": "Neodymium(III) sulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Neodymium_tantalate",
        "name": "Neodymium tantalate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Neodymium(III)_vanadate",
        "name": "Neodymium(III) vanadate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Neptunium(III)_fluoride",
        "name": "Neptunium(III) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Neptunium(IV)_fluoride",
        "name": "Neptunium(IV) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Neptunium(IV)_oxide",
        "name": "Neptunium(IV) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Neptunium(VI)_fluoride",
        "name": "Neptunium(VI) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Nickel(II)_carbonate",
        "name": "Nickel(II) carbonate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Nickel(II)_chloride",
        "name": "Nickel(II) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Nickel(II)_fluoride",
        "name": "Nickel(II) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Nickel(II)_hydroxide",
        "name": "Nickel(II) hydroxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Nickel(II)_nitrate",
        "name": "Nickel(II) nitrate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Nickel(II)_oxide",
        "name": "Nickel(II) oxide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Nickel(II)_sulfamate&action=edit&redlink=1",
        "name": "Nickel(II) sulfamate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Nickel(II)_sulfide",
        "name": "Nickel(II) sulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Niobium(IV)_fluoride",
        "name": "Niobium(IV) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Niobium(V)_fluoride",
        "name": "Niobium(V) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Niobium_oxychloride",
        "name": "Niobium oxychloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Niobium_pentachloride",
        "name": "Niobium pentachloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Dinitrogen_pentoxide",
        "name": "Dinitrogen pentoxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Dinitrogen_tetrafluoride",
        "name": "Dinitrogen tetrafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Dinitrogen_tetroxide",
        "name": "Dinitrogen tetroxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Dinitrogen_trioxide",
        "name": "Dinitrogen trioxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Nitric_acid",
        "name": "Nitric acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Nitrous_acid",
        "name": "Nitrous acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Nitrogen_dioxide",
        "name": "Nitrogen dioxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Nitrogen_monoxide",
        "name": "Nitrogen monoxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Nitrous_oxide",
        "name": "Nitrous oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Nitrogen_pentafluoride",
        "name": "Nitrogen pentafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Nitrogen_triiodide",
        "name": "Nitrogen triiodide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Nitrosonium_octafluoroxenate(VI)",
        "name": "Nitrosonium octafluoroxenate(VI)"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Nitrosonium_tetrafluoroborate",
        "name": "Nitrosonium tetrafluoroborate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Nitrosylsulfuric_acid",
        "name": "Nitrosylsulfuric acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Osmium_hexafluoride",
        "name": "Osmium hexafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Osmium_tetroxide",
        "name": "Osmium tetroxide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Osmium_trioxide&action=edit&redlink=1",
        "name": "Osmium trioxide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Oxybis(tributyltin)&action=edit&redlink=1",
        "name": "Oxybis(tributyltin)"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Oxygen_difluoride",
        "name": "Oxygen difluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ozone",
        "name": "Ozone"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Aluminium_oxide",
        "name": "Aluminium oxide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Americium(II)_oxide&action=edit&redlink=1",
        "name": "Americium(II) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Americium(IV)_oxide",
        "name": "Americium(IV) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Antimony_trioxide",
        "name": "Antimony trioxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Antimony(V)_oxide",
        "name": "Antimony(V) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Arsenic_trioxide",
        "name": "Arsenic trioxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Arsenic(V)_oxide",
        "name": "Arsenic(V) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Barium_oxide",
        "name": "Barium oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Beryllium_oxide",
        "name": "Beryllium oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Bismuth(III)_oxide",
        "name": "Bismuth(III) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Bismuth_oxychloride",
        "name": "Bismuth oxychloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Boron_trioxide",
        "name": "Boron trioxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Bromine_monoxide",
        "name": "Bromine monoxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Carbon_dioxide",
        "name": "Carbon dioxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Carbon_monoxide",
        "name": "Carbon monoxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Cerium(IV)_oxide",
        "name": "Cerium(IV) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Chlorine_dioxide",
        "name": "Chlorine dioxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Chlorine_trioxide",
        "name": "Chlorine trioxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Dichlorine_heptaoxide",
        "name": "Dichlorine heptaoxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Dichlorine_monoxide",
        "name": "Dichlorine monoxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Chromium(III)_oxide",
        "name": "Chromium(III) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Chromium(IV)_oxide",
        "name": "Chromium(IV) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Chromium(VI)_oxide",
        "name": "Chromium(VI) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Cobalt(II)_oxide",
        "name": "Cobalt(II) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Copper(I)_oxide",
        "name": "Copper(I) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Copper(II)_oxide",
        "name": "Copper(II) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Curium(III)_oxide",
        "name": "Curium(III) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Curium(IV)_oxide",
        "name": "Curium(IV) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Dysprosium(III)_oxide",
        "name": "Dysprosium(III) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Erbium(III)_oxide",
        "name": "Erbium(III) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Europium(III)_oxide",
        "name": "Europium(III) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Oxygen_difluoride",
        "name": "Oxygen difluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Dioxygen_difluoride",
        "name": "Dioxygen difluoride"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Francium_oxide&action=edit&redlink=1",
        "name": "Francium oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Gadolinium(III)_oxide",
        "name": "Gadolinium(III) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Gallium(III)_oxide",
        "name": "Gallium(III) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Germanium_dioxide",
        "name": "Germanium dioxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Gold(III)_oxide",
        "name": "Gold(III) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Hafnium_dioxide",
        "name": "Hafnium dioxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Holmium(III)_oxide",
        "name": "Holmium(III) oxide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Indium(I)_oxide&action=edit&redlink=1",
        "name": "Indium(I) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Indium(III)_oxide",
        "name": "Indium(III) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iodine_pentoxide",
        "name": "Iodine pentoxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iridium(IV)_oxide",
        "name": "Iridium(IV) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iron(II)_oxide",
        "name": "Iron(II) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iron(II,III)_oxide",
        "name": "Iron(II,III) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Iron(III)_oxide",
        "name": "Iron(III) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lanthanum(III)_oxide",
        "name": "Lanthanum(III) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lead(II)_oxide",
        "name": "Lead(II) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lead_dioxide",
        "name": "Lead dioxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lithium_oxide",
        "name": "Lithium oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Magnesium_oxide",
        "name": "Magnesium oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_oxide",
        "name": "Potassium oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Rubidium_oxide",
        "name": "Rubidium oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_oxide",
        "name": "Sodium oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Strontium_oxide",
        "name": "Strontium oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tellurium_dioxide",
        "name": "Tellurium dioxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Uranium(IV)_oxide",
        "name": "Uranium(IV) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Palladium(II)_chloride",
        "name": "Palladium(II) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Palladium(II)_nitrate",
        "name": "Palladium(II) nitrate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Palladium(II,IV)_fluoride",
        "name": "Palladium(II,IV) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Palladium_sulfate",
        "name": "Palladium sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Palladium_tetrafluoride",
        "name": "Palladium tetrafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Diphosphorus_tetrachloride",
        "name": "Diphosphorus tetrachloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Diphosphorus_tetrafluoride",
        "name": "Diphosphorus tetrafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Diphosphorus_tetraiodide",
        "name": "Diphosphorus tetraiodide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Hexachlorophosphazene",
        "name": "Hexachlorophosphazene"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Phosphine",
        "name": "Phosphine"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Phosphomolybdic_acid",
        "name": "Phosphomolybdic acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Phosphoric_acid",
        "name": "Phosphoric acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Phosphorous_acid",
        "name": "Phosphorous acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Phosphoryl_nitride",
        "name": "Phosphoroyl nitride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Phosphorus_pentabromide",
        "name": "Phosphorus pentabromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Phosphorus_pentafluoride",
        "name": "Phosphorus pentafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Phosphorus_pentasulfide",
        "name": "Phosphorus pentasulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Phosphorus_pentoxide",
        "name": "Phosphorus pentoxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Phosphorus_sesquisulfide",
        "name": "Phosphorus sesquisulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Phosphorus_tribromide",
        "name": "Phosphorus tribromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Phosphorus_trichloride",
        "name": "Phosphorus trichloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Phosphorus_trifluoride",
        "name": "Phosphorus trifluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Phosphorus_triiodide",
        "name": "Phosphorus triiodide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Phosphotungstic_acid",
        "name": "Phosphotungstic acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Poly(dichlorophosphazene)",
        "name": "Poly(dichlorophosphazene)"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Platinum(II)_chloride",
        "name": "Platinum(II) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Platinum(IV)_chloride",
        "name": "Platinum(IV) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Platinum_hexafluoride",
        "name": "Platinum hexafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Platinum_pentafluoride",
        "name": "Platinum pentafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Platinum_tetrafluoride",
        "name": "Platinum tetrafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Plutonium(III)_bromide",
        "name": "Plutonium(III) bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Plutonium(III)_chloride",
        "name": "Plutonium(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Plutonium(III)_fluoride",
        "name": "Plutonium(III) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Plutonium_dioxide",
        "name": "Plutonium dioxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Plutonium_hexafluoride",
        "name": "Plutonium hexafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Plutonium_hydride",
        "name": "Plutonium hydride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Plutonium_tetrafluoride",
        "name": "Plutonium tetrafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Polonium_hexafluoride",
        "name": "Polonium hexafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Polonium_monoxide",
        "name": "Polonium monoxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Polonium_dioxide",
        "name": "Polonium dioxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Polonium_trioxide",
        "name": "Polonium trioxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potash_Alum",
        "name": "Potash Alum"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_alum",
        "name": "Potassium alum"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_aluminium_fluoride",
        "name": "Potassium aluminium fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_amide",
        "name": "Potassium amide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_argentocyanide",
        "name": "Potassium argentocyanide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_arsenite",
        "name": "Potassium arsenite"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_azide",
        "name": "Potassium azide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Potassium_borate&action=edit&redlink=1",
        "name": "Potassium borate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_bromide",
        "name": "Potassium bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_bicarbonate",
        "name": "Potassium bicarbonate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_bifluoride",
        "name": "Potassium bifluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_bisulfite",
        "name": "Potassium bisulfite"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_carbonate",
        "name": "Potassium carbonate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_calcium_chloride",
        "name": "Potassium calcium chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_chlorate",
        "name": "Potassium chlorate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_chloride",
        "name": "Potassium chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_chlorite",
        "name": "Potassium chlorite"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_chromate",
        "name": "Potassium chromate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_cyanide",
        "name": "Potassium cyanide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_dichromate",
        "name": "Potassium dichromate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_dithionite",
        "name": "Potassium dithionite"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_ferrate",
        "name": "Potassium ferrate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_ferrioxalate",
        "name": "Potassium ferrioxalate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_ferricyanide",
        "name": "Potassium ferricyanide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_ferrocyanide",
        "name": "Potassium ferrocyanide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_heptafluorotantalate",
        "name": "Potassium heptafluorotantalate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_hexafluorophosphate",
        "name": "Potassium hexafluorophosphate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_hydrogen_carbonate",
        "name": "Potassium hydrogen carbonate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_hydrogen_fluoride",
        "name": "Potassium hydrogen fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_hydroxide",
        "name": "Potassium hydroxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_iodide",
        "name": "Potassium iodide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_iodate",
        "name": "Potassium iodate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_manganate",
        "name": "Potassium manganate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_monopersulfate",
        "name": "Potassium monopersulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_nitrate",
        "name": "Potassium nitrate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_perbromate",
        "name": "Potassium perbromate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_perchlorate",
        "name": "Potassium perchlorate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_periodate",
        "name": "Potassium periodate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_permanganate",
        "name": "Potassium permanganate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_sodium_tartrate",
        "name": "Potassium sodium tartrate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_sulfate",
        "name": "Potassium sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_sulfite",
        "name": "Potassium sulfite"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_sulfide",
        "name": "Potassium sulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_tartrate",
        "name": "Potassium tartrate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_tetraiodomercurate(II)",
        "name": "Potassium tetraiodomercurate(II)"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_thiocyanate",
        "name": "Potassium thiocyanate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Potassium_titanyl_phosphate",
        "name": "Potassium titanyl phosphate"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Potassium_vanadate&action=edit&redlink=1",
        "name": "Potassium vanadate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tripotassium_phosphate",
        "name": "Tripotassium phosphate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Praseodymium(III)_chloride",
        "name": "Praseodymium(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Praseodymium(III)_sulfate",
        "name": "Praseodymium(III) sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Praseodymium(III)_bromide",
        "name": "Praseodymium(III) bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Praseodymium(III)_carbonate",
        "name": "Praseodymium(III) carbonate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Praseodymium(III)_chloride",
        "name": "Praseodymium(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Praseodymium(III)_fluoride",
        "name": "Praseodymium(III) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Praseodymium(III)_iodide",
        "name": "Praseodymium(III) iodide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Praseodymium(III)_nitrate",
        "name": "Praseodymium(III) nitrate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Praseodymium(III)_oxide",
        "name": "Praseodymium(III) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Praseodymium(III)_phosphate",
        "name": "Praseodymium(III) phosphate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Praseodymium(III)_sulfate",
        "name": "Praseodymium(III) sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Praseodymium(III)_sulfide",
        "name": "Praseodymium(III) sulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Promethium(III)_chloride",
        "name": "Promethium(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Promethium(III)_oxide",
        "name": "Promethium(III) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Promethium(III)_bromide",
        "name": "Promethium(III) bromide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Promethium(III)_carbonate&action=edit&redlink=1",
        "name": "Promethium(III) carbonate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Promethium(III)_chloride",
        "name": "Promethium(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Promethium(III)_fluoride",
        "name": "Promethium(III) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Promethium(III)_iodide",
        "name": "Promethium(III) iodide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Promethium(III)_nitrate",
        "name": "Promethium(III) nitrate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Promethium(III)_oxide",
        "name": "Promethium(III) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Promethium(III)_phosphate",
        "name": "Promethium(III) phosphate"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Promethium(III)_sulfate&action=edit&redlink=1",
        "name": "Promethium(III) sulfate"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Promethium(III)_sulfide&action=edit&redlink=1",
        "name": "Promethium(III) sulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Radium_bromide",
        "name": "Radium bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Radium_carbonate",
        "name": "Radium carbonate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Radium_chloride",
        "name": "Radium chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Radium_fluoride",
        "name": "Radium fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Radon_difluoride",
        "name": "Radon difluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Rhenium(IV)_oxide",
        "name": "Rhenium(IV) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Rhenium(VII)_oxide",
        "name": "Rhenium(VII) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Rhenium_heptafluoride",
        "name": "Rhenium heptafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Rhenium_hexafluoride",
        "name": "Rhenium hexafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Rhodium_hexafluoride",
        "name": "Rhodium hexafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Rhodium_pentafluoride",
        "name": "Rhodium pentafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Rhodium(III)_chloride",
        "name": "Rhodium(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Rhodium(III)_hydroxide",
        "name": "Rhodium(III) hydroxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Rhodium(III)_iodide",
        "name": "Rhodium(III) iodide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Rhodium(III)_nitrate",
        "name": "Rhodium(III) nitrate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Rhodium(III)_oxide",
        "name": "Rhodium(III) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Rhodium(III)_sulfate",
        "name": "Rhodium(III) sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Rhodium(III)_sulfide",
        "name": "Rhodium(III) sulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Rhodium(IV)_fluoride",
        "name": "Rhodium(IV) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Rhodium(IV)_oxide",
        "name": "Rhodium(IV) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Rubidium_azide",
        "name": "Rubidium azide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Rubidium_bromide",
        "name": "Rubidium bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Rubidium_chloride",
        "name": "Rubidium chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Rubidium_fluoride",
        "name": "Rubidium fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Rubidium_hydrogen_sulfate",
        "name": "Rubidium hydrogen sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Rubidium_hydroxide",
        "name": "Rubidium hydroxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Rubidium_iodide",
        "name": "Rubidium iodide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Rubidium_nitrate",
        "name": "Rubidium nitrate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Rubidium_oxide",
        "name": "Rubidium oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Rubidium_telluride",
        "name": "Rubidium telluride"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Rubidium_titanyl_phosphate&action=edit&redlink=1",
        "name": "Rubidium titanyl phosphate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ruthenium_hexafluoride",
        "name": "Ruthenium hexafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ruthenium_pentafluoride",
        "name": "Ruthenium pentafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ruthenium_tetroxide",
        "name": "Ruthenium(VIII) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ruthenium(III)_chloride",
        "name": "Ruthenium(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ruthenium(IV)_oxide",
        "name": "Ruthenium(IV) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Samarium(II)_iodide",
        "name": "Samarium(II) iodide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Samarium(III)_chloride",
        "name": "Samarium(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Samarium(III)_oxide",
        "name": "Samarium(III) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Samarium(III)_bromide",
        "name": "Samarium(III) bromide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Samarium(III)_carbonate&action=edit&redlink=1",
        "name": "Samarium(III) carbonate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Samarium(III)_chloride",
        "name": "Samarium(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Samarium(III)_fluoride",
        "name": "Samarium(III) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Samarium(III)_iodide",
        "name": "Samarium(III) iodide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Samarium(III)_nitrate",
        "name": "Samarium(III) nitrate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Samarium(III)_oxide",
        "name": "Samarium(III) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Samarium(III)_phosphate",
        "name": "Samarium(III) phosphate"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Samarium(III)_sulfate&action=edit&redlink=1",
        "name": "Samarium(III) sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Samarium(III)_sulfide",
        "name": "Samarium(III) sulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Scandium(III)_fluoride",
        "name": "Scandium(III) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Scandium(III)_nitrate",
        "name": "Scandium(III) nitrate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Scandium(III)_oxide",
        "name": "Scandium(III) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Scandium(III)_triflate",
        "name": "Scandium(III) triflate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Selenic_acid",
        "name": "Selenic acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Selenious_acid",
        "name": "Selenious acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Selenium_dibromide",
        "name": "Selenium dibromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Selenium_dioxide",
        "name": "Selenium dioxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Selenium_disulfide",
        "name": "Selenium disulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Selenium_hexafluoride",
        "name": "Selenium hexafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Selenium_hexasulfide",
        "name": "Selenium hexasulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Selenium_oxybromide",
        "name": "Selenium oxybromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Selenium_oxydichloride",
        "name": "Selenium oxydichloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Selenium_tetrachloride",
        "name": "Selenium tetrachloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Selenium_tetrafluoride",
        "name": "Selenium tetrafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Selenium_trioxide",
        "name": "Selenium trioxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Selenoyl_fluoride",
        "name": "Selenoyl fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Silane",
        "name": "Silane"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Silica_gel",
        "name": "Silica gel"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Silicic_acid",
        "name": "Silicic acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Silicochloroform",
        "name": "Silicochloroform"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Trichlorosilane",
        "name": "trichlorosilane"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Silicofluoric_acid",
        "name": "Silicofluoric acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Silicon_boride",
        "name": "Silicon boride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Silicon_carbide",
        "name": "Silicon carbide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Silicon_dioxide",
        "name": "Silicon dioxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Silicon_monoxide",
        "name": "Silicon monoxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Silicon_nitride",
        "name": "Silicon nitride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Silicon_tetrabromide",
        "name": "Silicon tetrabromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Silicon_tetrachloride",
        "name": "Silicon tetrachloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Silicon_tetrafluoride",
        "name": "Silicon tetrafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Silicon_tetraiodide",
        "name": "Silicon tetraiodide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Thortveitite",
        "name": "Thortveitite"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Silver(I)_fluoride",
        "name": "Silver(I) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Silver(II)_fluoride",
        "name": "Silver(II) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Silver_acetylide",
        "name": "Silver acetylide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Silver_argentocyanide&action=edit&redlink=1",
        "name": "Silver argentocyanide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Silver_azide",
        "name": "Silver azide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Silver_bromate",
        "name": "Silver bromate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Silver_bromide",
        "name": "Silver bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Silver_chlorate",
        "name": "Silver chlorate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Silver_chloride",
        "name": "Silver chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Silver_chromate",
        "name": "Silver chromate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Silver_fluoroborate",
        "name": "Silver fluoroborate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Silver_fulminate",
        "name": "Silver fulminate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Silver_hydroxide",
        "name": "Silver hydroxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Silver_iodide",
        "name": "Silver iodide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Silver_nitrate",
        "name": "Silver nitrate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Silver_nitride",
        "name": "Silver nitride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Silver_oxide",
        "name": "Silver oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Silver_perchlorate",
        "name": "Silver perchlorate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Silver_permanganate",
        "name": "Silver permanganate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Silver_phosphate",
        "name": "Silver phosphate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Silver_subfluoride",
        "name": "Silver subfluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Silver_sulfate",
        "name": "Silver sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Silver_sulfide",
        "name": "Silver sulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodamide",
        "name": "Sodamide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_aluminate",
        "name": "Sodium aluminate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_arsenate",
        "name": "Sodium arsenate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_azide",
        "name": "Sodium azide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_bicarbonate",
        "name": "Sodium bicarbonate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_biselenide",
        "name": "Sodium biselenide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_bisulfate",
        "name": "Sodium bisulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_bisulfite",
        "name": "Sodium bisulfite"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_borate",
        "name": "Sodium borate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_borohydride",
        "name": "Sodium borohydride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_bromate",
        "name": "Sodium bromate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_bromide",
        "name": "Sodium bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_bromite",
        "name": "Sodium bromite"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_carbide",
        "name": "Sodium carbide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_carbonate",
        "name": "Sodium carbonate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_chlorate",
        "name": "Sodium chlorate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_chloride",
        "name": "Sodium chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_chlorite",
        "name": "Sodium chlorite"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_cobaltinitrite",
        "name": "Sodium cobaltinitrite"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Sodium_copper_tetrachloride&action=edit&redlink=1",
        "name": "Sodium copper tetrachloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_cyanate",
        "name": "Sodium cyanate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_cyanide",
        "name": "Sodium cyanide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_dichromate",
        "name": "Sodium dichromate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_dioxide",
        "name": "Sodium dioxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_dithionite",
        "name": "Sodium dithionite"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_ferrocyanide",
        "name": "Sodium ferrocyanide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_fluoride",
        "name": "Sodium fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_fluorosilicate",
        "name": "Sodium fluorosilicate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_formate",
        "name": "Sodium formate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_hydride",
        "name": "Sodium hydride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_hydrogen_carbonate",
        "name": "Sodium hydrogen carbonate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_hydrosulfide",
        "name": "Sodium hydrosulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_hydroxide",
        "name": "Sodium hydroxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_hypobromite",
        "name": "Sodium hypobromite"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_hypochlorite",
        "name": "Sodium hypochlorite"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Sodium_hypoiodite&action=edit&redlink=1",
        "name": "Sodium hypoiodite"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_hypophosphite",
        "name": "Sodium hypophosphite"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_iodate",
        "name": "Sodium iodate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_iodide",
        "name": "Sodium iodide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_manganate",
        "name": "Sodium manganate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_molybdate",
        "name": "Sodium molybdate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_monofluorophosphate",
        "name": "Sodium monofluorophosphate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_nitrate",
        "name": "Sodium nitrate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_nitrite",
        "name": "Sodium nitrite"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_nitroprusside",
        "name": "Sodium nitroprusside"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_oxide",
        "name": "Sodium oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_perborate",
        "name": "Sodium perborate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_perbromate",
        "name": "Sodium perbromate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_percarbonate",
        "name": "Sodium percarbonate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_perchlorate",
        "name": "Sodium perchlorate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_periodate",
        "name": "Sodium periodate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_permanganate",
        "name": "Sodium permanganate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_peroxide",
        "name": "Sodium peroxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_peroxycarbonate",
        "name": "Sodium peroxycarbonate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_perrhenate",
        "name": "Sodium perrhenate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_persulfate",
        "name": "Sodium persulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_phosphate",
        "name": "Sodium phosphate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Trisodium_phosphate",
        "name": "trisodium phosphate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_selenate",
        "name": "Sodium selenate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_selenide",
        "name": "Sodium selenide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_selenite",
        "name": "Sodium selenite"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_silicate",
        "name": "Sodium silicate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_sulfate",
        "name": "Sodium sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_sulfide",
        "name": "Sodium sulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_sulfite",
        "name": "Sodium sulfite"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_tartrate",
        "name": "Sodium tartrate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_tellurite",
        "name": "Sodium tellurite"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_tetrachloroaluminate",
        "name": "Sodium tetrachloroaluminate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_tetrafluoroborate",
        "name": "Sodium tetrafluoroborate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_thioantimoniate",
        "name": "Sodium thioantimoniate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_thiocyanate",
        "name": "Sodium thiocyanate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_thiosulfate",
        "name": "Sodium thiosulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_tungstate",
        "name": "Sodium tungstate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_uranate",
        "name": "Sodium uranate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_zincate",
        "name": "Sodium zincate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Trisodium_phosphate",
        "name": "Trisodium phosphate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Strontium_bromide",
        "name": "Strontium bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Strontium_carbonate",
        "name": "Strontium carbonate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Strontium_chloride",
        "name": "Strontium chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Strontium_fluoride",
        "name": "Strontium fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Strontium_hydroxide",
        "name": "Strontium hydroxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Strontium_iodide",
        "name": "Strontium iodide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Strontium_nitrate",
        "name": "Strontium nitrate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Strontium_oxide",
        "name": "Strontium oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Strontium_titanate",
        "name": "Strontium titanate"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Strontium_bicarbonate&action=edit&redlink=1",
        "name": "Strontium bicarbonate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Strontium_boride",
        "name": "Strontium boride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Strontium_bromide",
        "name": "Strontium bromide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Strontium_carbide&action=edit&redlink=1",
        "name": "Strontium carbide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Strontium_carbonate",
        "name": "Strontium carbonate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Strontium_chloride",
        "name": "Strontium chloride"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Strontium_cyanamide&action=edit&redlink=1",
        "name": "Strontium cyanamide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Strontium_fluoride",
        "name": "Strontium fluoride"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Strontium_fluorophosphate&action=edit&redlink=1",
        "name": "Strontium fluorophosphate"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Strontium_gluconate&action=edit&redlink=1",
        "name": "Strontium gluconate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Strontium_hydride",
        "name": "Strontium hydride"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Strontium_hydrogen_phosphate&action=edit&redlink=1",
        "name": "Strontium hydrogen phosphate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Strontium_hydroxide",
        "name": "Strontium hydroxide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Strontium_hypochlorite&action=edit&redlink=1",
        "name": "Strontium hypochlorite"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Strontium_iodide",
        "name": "Strontium iodide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Strontium_molybdate&action=edit&redlink=1",
        "name": "Strontium molybdate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Strontium_nitrate",
        "name": "Strontium nitrate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Strontium_oxalate",
        "name": "Strontium oxalate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Strontium_oxide",
        "name": "Strontium oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Strontium_peroxide",
        "name": "Strontium peroxide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Strontium_phosphate&action=edit&redlink=1",
        "name": "Strontium phosphate"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Strontium_silicate&action=edit&redlink=1",
        "name": "Strontium silicate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Strontium_sulfate",
        "name": "Strontium sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Strontium_sulfide",
        "name": "Strontium sulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Strontium_titanate",
        "name": "Strontium titanate"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Strontium_tungstate&action=edit&redlink=1",
        "name": "Strontium tungstate"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Strontium_zirconate&action=edit&redlink=1",
        "name": "Strontium zirconate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Disulfur_decafluoride",
        "name": "Disulfur decafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Hydrogen_sulfide",
        "name": "Hydrogen sulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Pyrosulfuric_acid",
        "name": "Pyrosulfuric acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sulfamic_acid",
        "name": "Sulfamic acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sulfur_dibromide",
        "name": "Sulfur dibromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sulfur_dioxide",
        "name": "Sulfur dioxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sulfur_hexafluoride",
        "name": "Sulfur hexafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sulfur_tetrafluoride",
        "name": "Sulfur tetrafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sulfuric_acid",
        "name": "Sulfuric acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sulfurous_acid",
        "name": "Sulfurous acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sulfuryl_chloride",
        "name": "Sulfuryl chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tetrasulfur_tetranitride",
        "name": "Tetrasulfur tetranitride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Peroxymonosulfuric_acid",
        "name": "Persulfuric acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tantalum_arsenide",
        "name": "Tantalum arsenide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tantalum_carbide",
        "name": "Tantalum carbide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tantalum_pentafluoride",
        "name": "Tantalum pentafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tantalum(V)_oxide",
        "name": "Tantalum(V) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Technetium_hexafluoride",
        "name": "Technetium hexafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ammonium_pertechnetate",
        "name": "Ammonium pertechnetate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_pertechnetate",
        "name": "Sodium pertechnetate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ditellurium_bromide",
        "name": "Ditellurium bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Telluric_acid",
        "name": "Telluric acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tellurium_dioxide",
        "name": "Tellurium dioxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tellurium_hexafluoride",
        "name": "Tellurium hexafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tellurium_tetrabromide",
        "name": "Tellurium tetrabromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tellurium_tetrachloride",
        "name": "Tellurium tetrachloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tellurium_tetrafluoride",
        "name": "Tellurium tetrafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tellurium_tetraiodide",
        "name": "Tellurium tetraiodide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tellurous_acid",
        "name": "Tellurous acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Beryllium_telluride",
        "name": "Beryllium telluride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Bismuth_telluride",
        "name": "Bismuth telluride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Cadmium_telluride",
        "name": "Cadmium telluride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Cadmium_zinc_telluride",
        "name": "Cadmium zinc telluride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Dimethyltelluride",
        "name": "Dimethyltelluride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Mercury_Cadmium_Telluride",
        "name": "Mercury Cadmium Telluride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lead_telluride",
        "name": "Lead telluride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Mercury_telluride",
        "name": "Mercury telluride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Mercury_zinc_telluride",
        "name": "Mercury zinc telluride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Silver_telluride",
        "name": "Silver telluride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tin_telluride",
        "name": "Tin telluride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Zinc_telluride",
        "name": "Zinc telluride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Teflic_acid",
        "name": "Teflic acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Telluric_acid",
        "name": "Telluric acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Sodium_tellurite",
        "name": "Sodium tellurite"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tellurium_dioxide",
        "name": "Tellurium dioxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tellurium_hexafluoride",
        "name": "Tellurium hexafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tellurium_tetrafluoride",
        "name": "Tellurium tetrafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tellurium_tetrachloride",
        "name": "Tellurium tetrachloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Terbium(III)_chloride",
        "name": "Terbium(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Terbium(III)_bromide",
        "name": "Terbium(III) bromide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Terbium(III)_carbonate&action=edit&redlink=1",
        "name": "Terbium(III) carbonate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Terbium(III)_chloride",
        "name": "Terbium(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Terbium(III)_fluoride",
        "name": "Terbium(III) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Terbium(III)_iodide",
        "name": "Terbium(III) iodide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Terbium(III)_nitrate",
        "name": "Terbium(III) nitrate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Terbium(III)_oxide",
        "name": "Terbium(III) oxide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Terbium(III)_phosphate&action=edit&redlink=1",
        "name": "Terbium(III) phosphate"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Terbium(III)_sulfate&action=edit&redlink=1",
        "name": "Terbium(III) sulfate"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Terbium(III)_sulfide&action=edit&redlink=1",
        "name": "Terbium(III) sulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Thallium(I)_bromide",
        "name": "Thallium(I) bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Thallium(I)_carbonate",
        "name": "Thallium(I) carbonate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Thallium(I)_fluoride",
        "name": "Thallium(I) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Thallium(I)_sulfate",
        "name": "Thallium(I) sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Thallium(III)_oxide",
        "name": "Thallium(III) oxide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Thallium(III)_sulfate&action=edit&redlink=1",
        "name": "Thallium(III) sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Thallium_triiodide",
        "name": "Thallium triiodide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Thallium_antimonide&action=edit&redlink=1",
        "name": "Thallium antimonide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Thallium_arsenide&action=edit&redlink=1",
        "name": "Thallium arsenide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Thallium(III)_bromide",
        "name": "Thallium(III) bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Thallium(III)_chloride",
        "name": "Thallium(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Thallium(III)_fluoride",
        "name": "Thallium(III) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Thallium(I)_iodide",
        "name": "Thallium(I) iodide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Thallium(III)_nitrate",
        "name": "Thallium(III) nitrate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Thallium(I)_oxide",
        "name": "Thallium(I) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Thallium(III)_oxide",
        "name": "Thallium(III) oxide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Thallium_phosphide&action=edit&redlink=1",
        "name": "Thallium phosphide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Thallium(III)_selenide&action=edit&redlink=1",
        "name": "Thallium(III) selenide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Thallium(III)_sulfate&action=edit&redlink=1",
        "name": "Thallium(III) sulfate"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Thallium(III)_sulfide&action=edit&redlink=1",
        "name": "Thallium(III) sulfide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=TrimethylThallium&action=edit&redlink=1",
        "name": "TrimethylThallium"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Thallium(I)_hydroxide",
        "name": "Thallium(I) hydroxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Thionyl_chloride",
        "name": "Thionyl chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Thionyl_tetrafluoride",
        "name": "Thionyl tetrafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Thiophosgene",
        "name": "Thiophosgene"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Thiophosphoryl_chloride",
        "name": "Thiophosphoryl chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Thorium(IV)_nitrate",
        "name": "Thorium(IV) nitrate"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Thorium(IV)_sulfate&action=edit&redlink=1",
        "name": "Thorium(IV) sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Thorium_dioxide",
        "name": "Thorium dioxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Thorium_tetrafluoride",
        "name": "Thorium tetrafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Thulium(III)_bromide",
        "name": "Thulium(III) bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Thulium(III)_chloride",
        "name": "Thulium(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Thulium(III)_oxide",
        "name": "Thulium(III) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Stannane",
        "name": "Stannane"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tin(II)_bromide",
        "name": "Tin(II) bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tin(II)_chloride",
        "name": "Tin(II) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tin(II)_fluoride",
        "name": "Tin(II) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tin(II)_hydroxide",
        "name": "Tin(II) hydroxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tin(II)_iodide",
        "name": "Tin(II) iodide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tin(II)_oxide",
        "name": "Tin(II) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tin(II)_sulfate",
        "name": "Tin(II) sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tin(II)_sulfide",
        "name": "Tin(II) sulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tin(IV)_bromide",
        "name": "Tin(IV) bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tin(IV)_chloride",
        "name": "Tin(IV) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tin(IV)_fluoride",
        "name": "Tin(IV) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tin(IV)_iodide",
        "name": "Tin(IV) iodide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tin(IV)_oxide",
        "name": "Tin(IV) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tin(IV)_sulfide",
        "name": "Tin(IV) sulfide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Tin(IV)_cyanide&action=edit&redlink=1",
        "name": "Tin(IV) cyanide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tin_selenide",
        "name": "Tin selenide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tin_telluride",
        "name": "Tin telluride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Hexafluorotitanic_acid",
        "name": "Hexafluorotitanic acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Titanium(II)_chloride",
        "name": "Titanium(II) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Titanium(II)_oxide",
        "name": "Titanium(II) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Titanium(II)_sulfide",
        "name": "Titanium(II) sulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Titanium(III)_bromide",
        "name": "Titanium(III) bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Titanium(III)_chloride",
        "name": "Titanium(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Titanium(III)_fluoride",
        "name": "Titanium(III) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Titanium(III)_iodide",
        "name": "Titanium(III) iodide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Titanium(III)_oxide",
        "name": "Titanium(III) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Titanium(III)_phosphide",
        "name": "Titanium(III) phosphide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Titanium(IV)_bromide",
        "name": "Titanium(IV) bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Titanium_tetrabromide",
        "name": "titanium tetrabromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Titanium(IV)_carbide",
        "name": "Titanium(IV) carbide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Titanium(IV)_chloride",
        "name": "Titanium(IV) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Titanium_tetrachloride",
        "name": "titanium tetrachloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Titanium(IV)_hydride",
        "name": "Titanium(IV) hydride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Titanium(IV)_iodide",
        "name": "Titanium(IV) iodide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Titanium_tetraiodide",
        "name": "titanium tetraiodide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Titanium_carbide",
        "name": "Titanium carbide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Titanium_diboride",
        "name": "Titanium diboride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Titanium_dioxide",
        "name": "Titanium dioxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Titanium_diselenide",
        "name": "Titanium diselenide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Titanium_disilicide",
        "name": "Titanium disilicide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Titanium_disulfide",
        "name": "Titanium disulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Titanium_nitrate",
        "name": "Titanium nitrate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Titanium_nitride",
        "name": "Titanium nitride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Titanium_perchlorate",
        "name": "Titanium perchlorate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Titanium_silicon_carbide",
        "name": "Titanium silicon carbide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Titanium_tetrabromide",
        "name": "Titanium tetrabromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Titanium_tetrafluoride",
        "name": "Titanium tetrafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Titanium_tetraiodide",
        "name": "Titanium tetraiodide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Titanyl_sulfate",
        "name": "Titanyl sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tungsten(VI)_chloride",
        "name": "Tungsten(VI) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tungsten(VI)_fluoride",
        "name": "Tungsten(VI) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tungsten_boride",
        "name": "Tungsten boride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tungsten_carbide",
        "name": "Tungsten carbide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tungstic_acid",
        "name": "Tungstic acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Tungsten_hexacarbonyl",
        "name": "Tungsten hexacarbonyl"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Triuranium_octaoxide",
        "name": "Triuranium octaoxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Pitchblende",
        "name": "pitchblende"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Yellowcake",
        "name": "yellowcake"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Uranium_hexafluoride",
        "name": "Uranium hexafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Uranium_pentafluoride",
        "name": "Uranium pentafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Uranium_sulfate",
        "name": "Uranium sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Uranium_tetrachloride",
        "name": "Uranium tetrachloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Uranium_tetrafluoride",
        "name": "Uranium tetrafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Uranium(III)_chloride",
        "name": "Uranium(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Uranium(IV)_chloride",
        "name": "Uranium(IV) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Uranium(V)_chloride",
        "name": "Uranium(V) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Uranium_hexachloride",
        "name": "Uranium hexachloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Uranium(IV)_fluoride",
        "name": "Uranium(IV) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Uranium_pentafluoride",
        "name": "Uranium pentafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Uranium(VI)_fluoride",
        "name": "Uranium(VI) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Uranyl_peroxide",
        "name": "Uranyl peroxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Uranium_dioxide",
        "name": "Uranium dioxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Uranyl_carbonate",
        "name": "Uranyl carbonate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Uranyl_chloride",
        "name": "Uranyl chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Uranyl_fluoride",
        "name": "Uranyl fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Uranyl_hydroxide",
        "name": "Uranyl hydroxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Uranyl_hydroxide",
        "name": "Uranyl hydroxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Uranyl_nitrate",
        "name": "Uranyl nitrate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Uranyl_sulfate",
        "name": "Uranyl sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Vanadium(II)_chloride",
        "name": "Vanadium(II) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Vanadium(II)_oxide",
        "name": "Vanadium(II) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Vanadium(III)_bromide",
        "name": "Vanadium(III) bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Vanadium(III)_chloride",
        "name": "Vanadium(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Vanadium(III)_fluoride",
        "name": "Vanadium(III) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Vanadium(III)_nitride",
        "name": "Vanadium(III) nitride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Vanadium(III)_oxide",
        "name": "Vanadium(III) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Vanadium(IV)_chloride",
        "name": "Vanadium(IV) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Vanadium(IV)_fluoride",
        "name": "Vanadium(IV) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Vanadium(IV)_oxide",
        "name": "Vanadium(IV) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Vanadium(IV)_sulfate",
        "name": "Vanadium(IV) sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Vanadium(V)_oxide",
        "name": "Vanadium(V) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Vanadium_carbide",
        "name": "Vanadium carbide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Vanadium_oxytrichloride",
        "name": "Vanadium oxytrichloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Vanadium_pentafluoride",
        "name": "Vanadium pentafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Vanadium_tetrachloride",
        "name": "Vanadium tetrachloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Vanadium_tetrafluoride",
        "name": "Vanadium tetrafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Water_(molecule)",
        "name": "Water"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Perxenate#Perxenic_acid",
        "name": "Perxenic acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Xenon_difluoride",
        "name": "Xenon difluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Xenon_hexafluoride",
        "name": "Xenon hexafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Xenon_hexafluoroplatinate",
        "name": "Xenon hexafluoroplatinate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Xenon_tetrafluoride",
        "name": "Xenon tetrafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Xenon_tetroxide",
        "name": "Xenon tetroxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Xenic_acid",
        "name": "Xenic acid"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ytterbium(III)_chloride",
        "name": "Ytterbium(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ytterbium(III)_oxide",
        "name": "Ytterbium(III) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ytterbium(III)_sulfate",
        "name": "Ytterbium(III) sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ytterbium(III)_bromide",
        "name": "Ytterbium(III) bromide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Ytterbium(III)_carbonate&action=edit&redlink=1",
        "name": "Ytterbium(III) carbonate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ytterbium(III)_chloride",
        "name": "Ytterbium(III) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ytterbium(III)_fluoride",
        "name": "Ytterbium(III) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ytterbium(III)_iodide",
        "name": "Ytterbium(III) iodide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ytterbium(III)_nitrate",
        "name": "Ytterbium(III) nitrate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ytterbium(III)_oxide",
        "name": "Ytterbium(III) oxide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Ytterbium(III)_phosphate&action=edit&redlink=1",
        "name": "Ytterbium(III) phosphate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ytterbium(III)_sulfate",
        "name": "Ytterbium(III) sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ytterbium(III)_sulfide",
        "name": "Ytterbium(III) sulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Yttrium(III)_antimonide",
        "name": "Yttrium(III) antimonide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Yttrium(III)_arsenate&action=edit&redlink=1",
        "name": "Yttrium(III) arsenate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Yttrium(III)_arsenide",
        "name": "Yttrium(III) arsenide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Yttrium(III)_bromide",
        "name": "Yttrium(III) bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Yttrium(III)_fluoride",
        "name": "Yttrium(III) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Yttrium(III)_oxide",
        "name": "Yttrium(III) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Yttrium(III)_nitrate",
        "name": "Yttrium(III) nitrate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Yttrium(III)_sulfide",
        "name": "Yttrium(III) sulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Yttrium(III)_sulfate",
        "name": "Yttrium(III) sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Yttrium_aluminium_garnet",
        "name": "Yttrium aluminium garnet"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Yttrium_barium_copper_oxide",
        "name": "Yttrium barium copper oxide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Yttrium_cadmium&action=edit&redlink=1",
        "name": "Yttrium cadmium"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Yttrium_copper&action=edit&redlink=1",
        "name": "Yttrium copper"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Yttrium_gold&action=edit&redlink=1",
        "name": "Yttrium gold"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Yttrium_iridium&action=edit&redlink=1",
        "name": "Yttrium iridium"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Yttrium_iron_garnet",
        "name": "Yttrium iron garnet"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Yttrium_magnesium&action=edit&redlink=1",
        "name": "Yttrium magnesium"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Yttrium_phosphate",
        "name": "Yttrium phosphate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Yttrium_phosphide",
        "name": "Yttrium phosphide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Yttrium_rhodium&action=edit&redlink=1",
        "name": "Yttrium rhodium"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Yttrium_silver&action=edit&redlink=1",
        "name": "Yttrium silver"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Yttrium_zinc&action=edit&redlink=1",
        "name": "Yttrium zinc"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Zinc_arsenide",
        "name": "Zinc arsenide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Zinc_bromide",
        "name": "Zinc bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Zinc_carbonate",
        "name": "Zinc carbonate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Zinc_chloride",
        "name": "Zinc chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Zinc_cyanide",
        "name": "Zinc cyanide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Zinc_diphosphide",
        "name": "Zinc diphosphide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Zinc_fluoride",
        "name": "Zinc fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Zinc_iodide",
        "name": "Zinc iodide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Zinc_nitrate",
        "name": "Zinc nitrate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Zinc_oxide",
        "name": "Zinc oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Zinc_phosphide",
        "name": "Zinc phosphide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Zinc_pyrophosphate",
        "name": "Zinc pyrophosphate"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Zinc_selenate&action=edit&redlink=1",
        "name": "Zinc selenate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Zinc_selenide",
        "name": "Zinc selenide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Zinc_selenite&action=edit&redlink=1",
        "name": "Zinc selenite"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Zinc_selenocyanate&action=edit&redlink=1",
        "name": "Zinc selenocyanate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Zinc_sulfate",
        "name": "Zinc sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Zinc_sulfide",
        "name": "Zinc sulfide"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Zinc_sulfite&action=edit&redlink=1",
        "name": "Zinc sulfite"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Zinc_telluride",
        "name": "Zinc telluride"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Zinc_thiocyanate&action=edit&redlink=1",
        "name": "Zinc thiocyanate"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Zinc_tungstate&action=edit&redlink=1",
        "name": "Zinc tungstate"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Zirconia_hydrate&action=edit&redlink=1",
        "name": "Zirconia hydrate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Zirconium_boride",
        "name": "Zirconium boride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Zirconium_carbide",
        "name": "Zirconium carbide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Zirconium(IV)_chloride",
        "name": "Zirconium(IV) chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Zirconium(IV)_oxide",
        "name": "Zirconium(IV) oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Zirconium_hydroxide",
        "name": "Zirconium hydroxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Zirconium_orthosilicate",
        "name": "Zirconium orthosilicate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Zirconium_nitride",
        "name": "Zirconium nitride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Zirconium_tetrafluoride",
        "name": "Zirconium tetrafluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Zirconium_tetrahydroxide",
        "name": "Zirconium tetrahydroxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Zirconium_tungstate",
        "name": "Zirconium tungstate"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Zirconyl_bromide&action=edit&redlink=1",
        "name": "Zirconyl bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Zirconyl_chloride",
        "name": "Zirconyl chloride"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Zirconyl_nitrate&action=edit&redlink=1",
        "name": "Zirconyl nitrate"
    },
    {
        "link": "https://en.wikipedia.org/w/index.php?title=Zirconyl_sulfate&action=edit&redlink=1",
        "name": "Zirconyl sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Zirconium_dioxide",
        "name": "Zirconium dioxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Zirconium_nitride",
        "name": "Zirconium nitride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Zirconium_tetrachloride",
        "name": "Zirconium tetrachloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Zirconium(IV)_sulfide",
        "name": "Zirconium(IV) sulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Zirconium(IV)_silicide",
        "name": "Zirconium(IV) silicide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Zirconium(IV)_silicate",
        "name": "Zirconium(IV) silicate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Zirconium(IV)_fluoride",
        "name": "Zirconium(IV) fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Zirconium(IV)_bromide",
        "name": "Zirconium(IV) bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Zirconium(IV)_iodide",
        "name": "Zirconium(IV) iodide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Zirconium(IV)_hydroxide",
        "name": "Zirconium(IV) hydroxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Schwartz%27s_reagent",
        "name": "Schwartz's reagent"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Zirconium_propionate",
        "name": "Zirconium propionate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Zirconium_tungstate",
        "name": "Zirconium tungstate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Zirconium(II)_hydride",
        "name": "Zirconium(II) hydride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Lead_zirconate_titanate",
        "name": "Lead zirconate titanate"
    }
];

// Function to fetch data from API links and save as JSON
async function fetchData() {
    const mainList = [];
    for (const link of links) {
        if (link.link.includes('api') || link.link.includes('rest')) {
            try {
                const response = await fetch(link.link);
                const data = await response.json();
                mainList.push({ 'link': link.link, 'name': data.title });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        } else {
            mainList.push(link);
        }
    }
    fs.writeFileSync('result.json', JSON.stringify(mainList, null, 2));
}

fetchData();
