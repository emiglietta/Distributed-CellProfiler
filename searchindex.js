Search.setIndex({"docnames": ["AWS_hygiene_scripts", "SQS_QUEUE_information", "advanced_configuration", "config_examples", "costs", "dashboard", "overview", "overview_2", "passing_files_to_DCP", "step_0_prep", "step_1_configuration", "step_2_submit_jobs", "step_3_start_cluster", "step_4_monitor", "troubleshooting_runs", "versions"], "filenames": ["AWS_hygiene_scripts.md", "SQS_QUEUE_information.md", "advanced_configuration.md", "config_examples.md", "costs.md", "dashboard.md", "overview.md", "overview_2.md", "passing_files_to_DCP.md", "step_0_prep.md", "step_1_configuration.md", "step_2_submit_jobs.md", "step_3_start_cluster.md", "step_4_monitor.md", "troubleshooting_runs.md", "versions.md"], "titles": ["AWS Hygiene Scripts", "SQS QUEUE Information", "Advanced Configuration of DCP", "config.py configuration examples", "What does Distributed-CellProfiler cost?", "AWS Cloudwatch Dashboard", "What is Distributed-CellProfiler?", "What happens in AWS when I run Distributed-CellProfiler?", "Passing Files to DCP", "Step 0: Prep", "Step 1: Configuration", "Step 2: Submit Jobs", "Step 3: Start Cluster", "Step 4: Monitor", "Troubleshooting", "Versions"], "terms": {"see": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15], "also": [0, 1, 4, 5, 7, 8, 9, 11, 12, 13, 14, 15], "auspic": 0, "set": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15], "up": [0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 12, 13], "variou": 0, "automat": [0, 4, 7, 10, 12, 13, 14], "run": [0, 1, 2, 3, 4, 5, 8, 9, 11, 14, 15], "your": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 14], "account": [0, 3, 6, 7, 9, 10, 12, 14, 15], "python": [0, 10, 11, 12, 13, 15], "import": [0, 1, 8], "boto3": [0, 15], "time": [0, 1, 2, 3, 5, 6, 7, 9, 10, 11, 12, 13, 14], "filterstr": 0, "myprojectnam": 0, "client": 0, "cloudwatch": [0, 1, 4, 7, 13, 14], "describe_alarm": 0, "alarmtyp": 0, "metricalarm": 0, "statevalu": 0, "insufficient_data": 0, "while": [0, 1, 4, 6, 7, 9, 10, 11], "true": [0, 1, 3, 4, 8, 10, 13, 14], "eachalarm": 0, "alarmnam": 0, "delete_alarm": 0, "sleep": 0, "1": [0, 1, 2, 3, 4, 5, 7, 11, 13, 14], "avoid": [0, 2, 10, 14], "throttl": 0, "token": 0, "nexttoken": 0, "print": [0, 11, 14, 15], "bash": 0, "describ": [0, 3, 9], "in2csv": 0, "f": [0, 11], "json": [0, 9, 11, 12, 13, 14], "kei": [0, 9, 12, 14], "loggroup": 0, "csv": [0, 3, 11, 14], "r": [0, 9, 10, 14], "requir": [0, 1, 3, 6, 7, 8, 10, 14, 15], "dplyr": 0, "readr": 0, "librari": [0, 6], "read_csv": 0, "col_typ": 0, "cols_onli": 0, "storedbyt": 0, "col_integ": 0, "creationtim": 0, "col_doubl": 0, "loggroupnam": 0, "col_charact": 0, "mutat": 0, "posixct": 0, "1000": 0, "origin": [0, 1], "1970": 0, "01": [0, 11], "filter": [0, 14, 15], "0": [0, 3, 4, 10, 14], "select": [0, 1, 2, 4, 5, 8, 9, 12], "write_tsv": 0, "logs_clear": 0, "txt": [0, 8, 9, 11], "col_nam": 0, "parallel": [0, 11], "delet": [0, 1, 4, 13], "name": [0, 1, 2, 5, 7, 8, 10, 13, 14, 15], "thi": [1, 3, 5, 8, 10, 11, 12, 13, 14, 15], "depth": 1, "about": [1, 3, 5, 6, 7, 8, 11, 13, 14], "configur": [1, 4, 6, 13, 14], "compon": [1, 11], "section": [1, 9, 13, 14], "step": [1, 3, 5, 6, 7, 8, 14], "distribut": [1, 3, 5, 8, 9, 10, 11, 12, 13, 15], "cellprofil": [1, 3, 5, 8, 9, 10, 11, 12, 13, 14, 15], "where": [1, 2, 3, 5, 6, 8, 10, 11, 13, 14], "all": [1, 3, 4, 6, 7, 8, 9, 10, 11, 13, 14, 15], "job": [1, 3, 4, 5, 7, 8, 9, 10, 12, 13, 14, 15], "ar": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15], "sent": [1, 10, 12, 13], "A": [1, 3, 5, 7, 8, 10, 11, 14], "exactli": [1, 10], "what": [1, 5, 8, 10, 11], "sound": 1, "like": [1, 3, 5, 8, 9, 10, 11, 12, 14], "list": [1, 2, 3, 7, 9, 10, 11, 12, 14, 15], "thing": [1, 5, 7, 11, 12, 13], "wait": [1, 5, 10, 14], "turn": [1, 3], "repres": [1, 12], "one": [1, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14], "complet": [1, 5, 7, 9, 10, 12, 14, 15], "through": [1, 5, 7, 8, 9, 10, 12, 14], "pipelin": [1, 3, 7, 8, 10, 11, 14, 15], "though": [1, 7, 9, 11, 12], "each": [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "mai": [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 14], "involv": [1, 9, 13], "ani": [1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 13, 14], "number": [1, 2, 3, 4, 5, 7, 9, 10, 11, 12, 13, 14, 15], "imag": [1, 3, 6, 7, 8, 10, 11, 14, 15], "e": [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15], "g": [1, 2, 3, 6, 7, 8, 11, 13, 14, 15], "analysi": [1, 3, 10, 11], "thousand": 1, "singl": [1, 3, 5, 7, 8, 10, 14], "make": [1, 3, 5, 7, 8, 9, 10, 11, 12, 14], "an": [1, 3, 4, 5, 6, 8, 9, 10, 11, 13, 14, 15], "illumin": [1, 3, 11], "correct": [1, 3, 10, 11, 14], "iter": 1, "produc": 1, "output": [1, 3, 7, 10, 11, 12, 13, 14, 15], "file": [1, 2, 3, 4, 5, 6, 7, 9, 12, 14, 15], "you": [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "want": [1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 13, 14], "descript": [1, 10], "enough": [1, 3, 5, 10, 13], "distinguish": 1, "from": [1, 3, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15], "other": [1, 3, 5, 7, 8, 9], "we": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], "usual": [1, 3, 11, 14], "our": [1, 2, 3, 5, 6, 8, 9, 11, 12, 15], "base": [1, 3, 10, 11, 12, 14], "project": [1, 2, 3, 6, 8, 14], "goal": 1, "someth": [1, 14], "hepatocyte_differentiation_illum": 1, "lipid_droplet_analysi": 1, "fail": [1, 5, 10, 14], "If": [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14], "everyth": [1, 6, 9], "goe": 1, "perfectli": 1, "alwai": [1, 6, 13, 15], "remain": [1, 5, 13], "empti": [1, 4, 5, 7, 14], "multipl": [1, 3, 4, 7, 10, 13, 14, 15], "default": [1, 2, 3, 8, 9, 10, 11, 13, 14, 15], "10": [1, 2, 3, 4, 11, 13], "thei": [1, 3, 5, 7, 10, 11, 12, 13, 14, 15], "move": [1, 5, 10, 14, 15], "dead": [1, 7], "letter": [1, 7], "which": [1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15], "us": [1, 3, 4, 5, 7, 9, 10, 11, 12, 14, 15], "initi": [1, 4, 5, 6, 9, 13, 14], "The": [1, 4, 5, 7, 10, 11, 12, 13, 14, 15], "therefor": [1, 5, 13], "function": [1, 3, 9, 11, 14], "effect": [1, 3], "log": [1, 2, 7, 9, 12, 13, 14, 15], "so": [1, 3, 5, 7, 9, 11, 12, 13, 14], "can": [1, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15], "It": [1, 3, 5, 6, 7, 8, 9, 10, 11, 14], "differ": [1, 2, 3, 5, 7, 11, 13, 14, 15], "machin": [1, 3, 4, 5, 7, 8, 9, 10, 12, 13, 14, 15], "do": [1, 5, 8, 9, 10, 11, 12, 13], "try": [1, 2, 5, 9, 10, 11, 14], "pull": [1, 5, 9, 12], "protip": 1, "member": 1, "team": [1, 3], "maintain": [1, 5, 8], "own": [1, 3, 5, 7, 9, 11, 14], "don": [1, 3, 6, 7, 9, 10, 11, 12, 14, 15], "t": [1, 3, 5, 6, 7, 8, 9, 10, 11, 14, 15], "have": [1, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14], "worri": [1, 6, 14], "find": [1, 8, 11, 12, 13, 14], "messag": [1, 2, 4, 5, 7, 14], "peopl": 1, "same": [1, 4, 5, 8, 10, 12, 14], "deadmessages_erin": 1, "end": [1, 4, 5, 7, 8, 10], "mani": [1, 5, 6, 7, 10, 11, 12, 14, 15], "place": [1, 2, 4, 7, 9, 10, 11, 12, 13, 14], "could": [1, 5, 7], "problem": [1, 6, 10, 14], "hopefulli": 1, "ll": [1, 5, 6, 7, 12], "keep": [1, 2, 7, 10, 13], "ey": [1, 7, 13], "part": [1, 5, 10, 14], "aw": [1, 2, 3, 4, 6, 12, 13, 14], "monitor": [1, 2, 3, 4, 5, 7, 12, 15], "servic": [1, 4, 6, 7, 10, 13], "after": [1, 2, 4, 5, 7, 8, 9, 10, 12, 13, 14], "start": [1, 4, 5, 7, 10, 11, 13, 14], "catch": 1, "issu": [1, 8, 10, 14, 15], "befor": [1, 2, 10, 11, 14], "rest": 1, "successfulli": [1, 5, 9, 11], "corrupt": [1, 10, 14], "ha": [1, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14], "save": [1, 5, 10, 12, 13, 14], "properli": [1, 9, 11], "been": [1, 3, 5, 9, 10, 12, 13, 14], "damag": 1, "open": [1, 3, 7, 14], "whether": [1, 5, 7, 10], "process": [1, 3, 6, 8, 9, 10, 11, 13, 14], "re": [1, 5, 6, 7, 10, 11, 12, 14], "interest": 1, "cellular": 1, "measur": [1, 3, 11], "per": [1, 2, 4, 5, 8, 9, 10, 11, 12], "basi": [1, 11], "when": [1, 3, 4, 5, 6, 9, 10, 11, 12, 14, 15], "plate": [1, 3, 7, 11, 14, 15], "major": [1, 4, 7], "reason": [1, 10, 12], "why": [1, 5, 7], "certainli": [1, 9], "pai": [1, 6, 10, 12, 14], "cluster": [1, 3, 4, 5, 8, 10, 13, 15], "indefinit": [1, 10, 14], "attempt": 1, "wouldn": 1, "necessarili": [1, 5, 14], "help": [1, 3, 4, 5, 6, 7, 10, 11, 13, 15], "kind": [1, 8, 11], "error": [1, 7, 11, 13, 14, 15], "becaus": [1, 5, 12, 13, 14], "ten": 1, "hundr": 1, "success": [1, 8, 14], "instanc": [1, 2, 4, 6, 9, 12, 13, 14], "etc": [1, 10, 11, 13, 14], "control": [1, 3, 11], "how": [1, 3, 5, 8, 9, 10, 11, 12, 14], "long": [1, 3, 5, 7, 10, 13, 14], "hidden": [1, 5, 10], "being": [1, 2, 3, 5, 6, 7, 8, 10, 11, 14], "must": [1, 3, 8, 10, 11, 14, 15], "visibl": [1, 5, 7], "i": [1, 5, 9, 10, 14], "order": [1, 8, 10, 11, 12, 15], "docker": [1, 3, 5, 7, 12, 13, 14], "In": [1, 2, 4, 5, 6, 7, 12, 14], "word": 1, "enter": [1, 2, 3, 8, 9, 12, 13], "allow": [1, 5, 6, 9, 10, 11, 12, 15], "chanc": 1, "unhidden": 1, "made": [1, 7, 9, 10, 14], "avail": [1, 6, 9, 13], "copi": [1, 3, 7, 8, 10, 12, 14], "s": [1, 5, 6, 7, 9, 10, 11, 12, 14], "quit": [1, 7, 13], "correctli": [1, 3, 9, 10, 14], "typic": [1, 4, 10, 14], "sai": [1, 13], "estim": [1, 10, 12], "5x": 1, "take": [1, 3, 5, 6, 7, 10, 11, 12, 13], "best": [1, 7, 11], "guess": 1, "sure": [1, 3, 5, 8, 9, 10, 11, 12, 14], "To": [1, 5, 7, 8, 9], "understand": [1, 5, 11, 13], "consequ": 1, "incorrect": [1, 14], "let": [1, 12], "look": [1, 3, 5, 6, 10, 12, 13, 14], "more": [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "carefulli": 1, "two": [1, 5, 9, 15], "categori": 1, "flight": [1, 14], "regardless": 1, "mean": [1, 5, 8, 13, 14], "current": [1, 4, 9, 13, 15], "hide": [1, 5], "submit": [1, 7, 9, 12, 13, 14], "config": [1, 2, 4, 5, 7, 11, 13, 14, 15], "creat": [1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 15], "out": [1, 5, 7, 10, 13, 14], "put": [1, 5, 7, 8, 11], "under": [1, 4, 8, 12], "fleet": [1, 2, 4, 5, 6, 7, 9, 10, 13, 14, 15], "ec2": [1, 2, 4, 7, 12, 13, 14], "2": [1, 2, 3, 5, 7, 10, 12, 14], "ec": [1, 2, 4, 7, 9, 12, 13, 14], "contain": [1, 3, 5, 6, 7, 8, 10, 11, 12, 13, 14], "those": [1, 6], "3": [1, 3, 4, 5, 7, 11, 14, 15], "onc": [1, 3, 4, 5, 7, 9, 10, 11, 12, 13], "durat": [1, 4], "becom": [1, 13, 14], "again": [1, 9, 10, 12], "tell": [1, 7, 8, 10], "anoth": [1, 7, 8, 10, 13], "too": [1, 7, 9, 10, 12, 14], "short": [1, 5, 10, 14], "even": [1, 5, 12, 13], "still": [1, 4, 15], "pick": 1, "come": [1, 5, 10], "along": [1, 7], "unnecessari": 1, "comput": [1, 6, 7, 9], "both": [1, 5, 12, 13], "continu": [1, 12], "until": [1, 5, 7], "finish": [1, 2, 4, 5, 7, 10, 12, 14], "wast": [1, 10], "monei": [1, 5, 13], "crash": [1, 5, 7, 10, 13], "done": [1, 2, 4, 5, 8, 10], "anyth": [1, 6, 7, 13], "caus": [1, 14], "stop": [1, 4], "mid": 1, "remov": [1, 5, 7, 13, 14, 15], "outbid": 1, "stai": 1, "doesn": [1, 5, 6, 7, 10, 14], "doe": [1, 9, 14], "limit": [1, 2, 3, 12, 13], "power": [1, 6], "some": [1, 2, 3, 5, 7, 8, 10, 12, 13], "hang": [1, 5], "around": [1, 5, 10], "noth": [1, 5, 14], "cost": 1, "doubt": 1, "better": [1, 3, 5, 10, 13, 14, 15], "than": [1, 3, 5, 6, 7, 10, 12, 13, 14, 15], "happen": [1, 5, 12, 13, 14], "rare": 1, "small": [1, 5, 7, 9], "notic": 1, "larger": [1, 3, 5, 7, 10, 14], "There": [1, 9, 14], "easi": [1, 8], "wai": [1, 3, 4, 6, 8, 11, 13, 15], "appropri": [1, 5, 9, 14], "amount": [1, 5, 7, 10], "first": [1, 5, 7, 9, 10, 12, 13], "brand": 1, "new": [1, 3, 9, 11, 13], "confirm": [1, 3, 9, 14], "didn": 1, "need": [1, 3, 5, 7, 8, 9, 10, 11, 12, 13, 14], "manual": [1, 3, 4], "go": [1, 3, 4, 7, 10, 12], "figur": [1, 5], "got": [1, 14], "individu": [1, 5, 7, 10, 11, 12, 13], "never": [1, 3, 9, 14], "likewis": 1, "timeout": 1, "seem": [1, 12], "few": [1, 7, 12, 13], "cpu": [1, 3, 7, 10, 13], "usag": [1, 4, 5, 11, 13, 14], "high": 1, "check": [1, 5, 14, 15], "execut": [1, 7, 10], "either": [1, 5, 8, 14], "begin": [1, 8, 11, 12], "note": [1, 3, 4, 5, 8, 11, 12, 13, 14], "accur": 1, "idea": 1, "roughli": [1, 7, 10], "accordingli": [1, 10, 12, 14], "fly": 1, "updat": [1, 5, 10, 12, 14], "won": [1, 5, 8, 12], "affect": [1, 6, 7], "alreadi": [1, 10, 12, 14], "wa": [1, 5, 6, 10, 11, 14], "hour": [1, 4, 5, 10, 12, 13], "chang": [1, 3, 4, 5, 14, 15], "sample_sqs_queu": 1, "png": [1, 10], "alt": 1, "activ": [1, 9, 10], "task": [1, 4, 5, 7, 10, 13], "64": [1, 7, 10], "32": 1, "moment": 1, "right": [1, 5], "lab": [1, 6, 11], "fortun": 1, "ve": [2, 9, 10, 11, 12], "tri": [2, 6, 10], "veri": [2, 3, 5, 14], "hard": [2, 3, 5, 7, 9, 10], "light": [2, 3], "adapt": 2, "manag": 2, "assumpt": 2, "below": [2, 3, 11, 12, 13], "non": [2, 11], "comprehens": 2, "code": [2, 7, 9], "purpos": 2, "locat": [2, 7, 8, 11, 14], "By": [2, 11], "bucket": [2, 3, 6, 8, 9, 13, 14, 15], "prefix": 2, "ecsconfig": 2, "altern": [2, 14], "design": [2, 6, 10, 11, 15], "script": [2, 4, 6, 7, 8, 9, 10, 11, 13, 14], "export": [2, 8, 9, 10, 13], "group": [2, 5, 7, 8, 9, 11, 12, 14, 15], "retent": 2, "60": [2, 3], "dai": 2, "hit": 2, "250": 2, "them": [2, 5, 7, 10, 11, 12, 13, 14], "exportedlog": 2, "log_group_nam": [2, 3, 10], "These": [2, 5, 7, 8, 9, 10, 12], "modifi": [2, 11], "addit": [2, 8, 11, 15], "spot": [2, 4, 5, 6, 7, 10, 13], "instal": [2, 6, 10, 12], "packag": [2, 6, 8], "startup": [2, 14], "userdata": 2, "paramet": [2, 3, 7, 13, 14, 15], "sq": [2, 4, 5, 7, 11, 13, 14], "queue": [2, 3, 4, 5, 7, 11, 12], "detail": [2, 7, 11, 12], "consign": 2, "deadletterqueu": 2, "unprocess": 2, "expir": 2, "14": 2, "maximum": [2, 3, 12, 13], "valu": [2, 3, 10, 12, 13, 14], "py": [2, 7, 8, 9, 10, 12, 13, 14, 15], "version": [2, 3, 6, 10, 13, 14], "date": 2, "latest": [2, 13], "stabl": [2, 5], "releas": 2, "case": [2, 5, 10, 14], "build": 2, "edit": [2, 8, 10, 13, 14], "dockerfil": 2, "call": [2, 8, 11, 14], "instead": [2, 8, 13, 14], "alarm": [2, 4, 5, 7, 10, 13], "threshold": 2, "worker": [2, 9, 14], "frequenc": 2, "type": [2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 15], "inform": [2, 3, 4, 5, 7, 8, 9, 11, 12, 13, 14], "includ": [2, 5, 6, 7, 9, 10, 11, 12, 14], "adjust": [2, 5], "command": [2, 4, 5, 7, 8, 9, 10, 11, 12], "line": [2, 3, 5, 8, 9, 11], "flag": 2, "cp": [2, 3, 14], "stream": [2, 12], "level": 2, "At": [2, 8], "least": [2, 5], "4": [2, 3, 5, 7, 10, 14, 15], "dockerhub_tag": [2, 3, 10, 14], "bethcimini": [2, 15], "0_4": [2, 3], "4_plugin": 2, "custom": [2, 5], "model": 2, "user": [2, 3, 6, 8, 9, 11], "train": 2, "gener": [2, 3, 8, 9, 12, 14], "cellpos": 2, "add": [2, 7, 8, 9, 10, 11, 12, 15], "s3": [2, 6, 7, 9, 13, 14, 15], "follow": [2, 3, 5, 7, 8, 9, 11, 12, 13], "structur": [2, 8, 11, 12, 14, 15], "organ": [2, 8], "project_nam": [2, 3], "workspac": 2, "custom_model_filenam": 2, "modul": [2, 8, 11, 14], "insid": [2, 10, 13], "detect": [2, 10], "mode": [2, 4, 9, 14, 15], "pre": [2, 12], "mount": [2, 7, 8, 9, 14], "path": [2, 3, 8, 10, 11, 14], "home": [2, 5, 6, 8, 14], "ubuntu": [2, 8, 14], "hand": 3, "standard": [3, 8], "workflow": [3, 6, 7, 8, 9, 10, 13, 14], "stereotyp": [3, 11], "fashion": 3, "cell": 3, "paint": 3, "assai": 3, "read": [3, 5, 7, 11, 13, 14, 15], "context": 3, "here": [3, 4, 7, 8, 11, 12], "z": 3, "pixel": 3, "plane": 3, "condens": 3, "content": 3, "focal": 3, "perform": [3, 4, 9, 10, 11, 13, 14], "downstream": 3, "batch": [3, 7, 11, 14, 15], "irregular": 3, "depend": [3, 4, 6, 9, 10, 11, 12, 14], "upon": [3, 14], "larg": [3, 5, 6, 7, 10, 11, 14], "found": [3, 7, 8, 15], "qualiti": [3, 11], "provid": [3, 4, 9, 11, 12], "metric": [3, 4, 5, 10, 13], "input": [3, 7, 8, 11, 14, 15], "necessari": [3, 7, 9, 10, 11, 13], "particularli": [3, 13], "improv": [3, 6, 10, 15], "wetlab": 3, "compar": [3, 5, 13], "across": [3, 5], "dataset": [3, 6], "dev": 3, "segment": 3, "quick": [3, 5], "outlin": [3, 7], "overlaid": 3, "multichannel": 3, "rescal": 3, "visual": 3, "inspect": 3, "often": [3, 5, 10, 14], "stitch": 3, "pseudo": [3, 9], "view": [3, 5, 7, 10], "chosen": 3, "work": [3, 9, 11, 12], "appli": 3, "actual": [3, 5, 7, 8, 10, 14], "occur": [3, 5, 14], "profil": 3, "taken": 3, "memori": [3, 5, 7, 10, 11, 13, 14], "reduc": [3, 10, 12, 14], "decreas": [3, 5, 7, 11, 14], "docker_cor": [3, 7, 10], "intern": 3, "app_nam": [3, 10, 13], "project_name_zproj": 3, "project_name_illum": 3, "project_name_qc": 3, "project_name_assaydev": 3, "project_name_analysi": 3, "excess": 3, "truncat": 3, "care": 3, "subsequ": [3, 12], "protocol": 3, "2021_06_08_wcpc_zproj": 3, "ensur": [3, 7, 8], "tag": [3, 9, 10, 15], "match": [3, 5, 11, 13, 14], "easili": [3, 9, 13], "text": [3, 8, 11], "editor": 3, "3rd": 3, "daterevis": 3, "413": 3, "aws_region": 3, "east": [3, 9, 14], "aws_profil": 3, "ssh_key_nam": [3, 14], "yourpem": 3, "pem": [3, 9, 12, 14], "aws_bucket": 3, "dcp": [3, 14, 15], "source_bucket": 3, "public": 3, "cellpaint": [3, 11], "galleri": 3, "destination_bucket": 3, "upload_flag": 3, "ecs_clust": [3, 7, 10], "most": [3, 5, 7, 9, 10, 13, 14, 15], "just": [3, 5, 12, 14], "yournam": 3, "cluster_machin": [3, 10], "100": [3, 5, 10], "200": [3, 13], "round": [3, 5], "25": 3, "request": [3, 4, 5, 9, 13, 14], "largest": 3, "capac": [3, 5, 12, 13, 15], "tasks_per_machin": [3, 10], "machine_typ": [3, 10, 14], "c5": 3, "xlarg": [3, 10], "histor": 3, "m4": [3, 7, 10], "m5": 3, "howev": [3, 5, 7, 12], "recent": [3, 13], "get": [3, 5, 6, 7, 9, 13, 14], "m": 3, "class": [3, 9], "switch": 3, "c": [3, 5, 11, 14], "size": [3, 5, 7, 10, 14, 15], "between": [3, 5, 9, 12, 14, 15], "machine_pric": [3, 10], "20": 3, "Will": 3, "ebs_vol_s": [3, 10, 14], "22": [3, 10], "might": [3, 10, 13], "download_fil": [3, 10, 14], "fals": [3, 4, 8, 10, 14], "2k": 3, "cpu_shar": [3, 10], "1024": [3, 10], "7500": 3, "15000": [3, 10], "seconds_to_start": [3, 10, 14], "sqs_queue_nam": [3, 10], "sqs_message_vis": [3, 5, 10, 14], "240": 3, "15": [3, 7, 13], "120": 3, "expect": [3, 14], "5": [3, 5, 14], "second": [3, 11, 12], "sqs_dead_letter_queu": [3, 10], "yourname_deadmessag": 3, "auto_monitor": [3, 10, 13], "off": 3, "create_dashboard": [3, 4, 10], "clean_dashboard": [3, 4, 10, 13], "check_if_done_bool": [3, 7, 10, 14], "overwrit": [3, 10, 13, 14], "old": [3, 4, 10, 14], "data": [3, 4, 6, 7, 9, 10, 11, 12], "expected_number_fil": [3, 7, 10, 14], "channel": [3, 8, 14], "npy": 3, "isdon": 3, "experi": [3, 11], "nuclei": 3, "cytoplasm": 3, "underestim": 3, "overestim": 3, "min_file_size_byt": [3, 10], "count": [3, 10], "necessary_str": [3, 10], "Not": [3, 5], "use_plugin": [3, 10], "update_plugin": [3, 10], "plugins_commit": [3, 10], "install_requir": [3, 10], "requirements_fil": [3, 10], "seri": [4, 6, 11], "three": [4, 7], "onli": [4, 5, 6, 9, 10, 11, 12, 13, 15], "incur": [4, 13], "scale": [4, 5, 9, 13], "setup": [4, 5, 7, 9, 10, 12, 14], "definit": [4, 7, 12, 13], "entir": [4, 7, 10, 11], "free": [4, 6, 9, 12], "million": 4, "month": 4, "submitjob": [4, 7, 8, 11], "startclust": [4, 7, 12, 13], "option": [4, 5, 7, 8, 10, 11, 12, 13, 14, 15], "dashboard": [4, 7, 13], "exact": 4, "price": [4, 7, 10, 12, 13, 15], "bid": [4, 5, 7, 10, 12, 13], "minim": [4, 6, 10], "encourag": [4, 12], "dure": [4, 9, 14], "down": [4, 5, 7, 11, 12, 13], "cancel": [4, 15], "aggress": 4, "downscal": [4, 13, 14, 15], "engag": [4, 13], "cheapest": [4, 15], "cleanup": 4, "without": [4, 5, 9, 12, 13, 14], "abort": 4, "clean": [4, 5, 10, 13], "purg": 4, "consol": [4, 5, 7, 9], "press": [4, 8], "action": 4, "directli": [4, 5, 7], "longer": [4, 5, 10, 13], "unus": 4, "state": [4, 9, 15], "insuffici": [4, 5], "hygien": 4, "50": [4, 13], "prevent": [4, 5], "choos": [4, 12, 13], "customiz": 5, "page": [5, 6, 7, 11, 12], "resourc": [5, 6, 7, 10], "full": [5, 7, 10], "widget": 5, "report": [5, 8, 14], "separ": [5, 6, 7, 11, 14], "auto": [5, 9, 10], "ds": [5, 7, 9], "popul": 5, "helfpul": 5, "post": 5, "mortem": 5, "previou": [5, 7, 11, 12, 13, 14, 15], "consist": [5, 14], "manner": [5, 14], "told": [5, 8], "optim": [5, 12, 13], "thu": 5, "fulfil": 5, "given": [5, 7], "point": [5, 7, 13, 14], "spin": 5, "hope": [5, 11], "straight": 5, "steadi": 5, "dip": [5, 13], "inevit": 5, "replac": [5, 8, 13], "give": [5, 6, 7, 10], "higher": [5, 10, 12], "bidder": 5, "everi": [5, 9, 11, 12, 13], "progress": [5, 10, 12, 14], "lost": 5, "reach": [5, 14], "For": [5, 11, 13], "much": [5, 7, 10, 12, 14], "impact": 5, "frustrat": 5, "potenti": 5, "expens": [5, 15], "lot": 5, "abl": [5, 10], "futur": [5, 9, 11], "region": [5, 9, 14], "blip": 5, "coincid": 5, "outag": [5, 10], "bad": [5, 10, 14], "luck": 5, "exampl": [5, 7, 11, 13, 14, 15], "abov": [5, 9, 13], "bulk": 5, "numberofmessagesdelet": 5, "well": [5, 6, 7, 8, 11, 12, 14, 15], "back": [5, 7], "track": [5, 8], "top": [5, 11], "gap": 5, "fraction": 5, "insight": 5, "encount": [5, 14], "smallest": 5, "possibl": [5, 7, 10, 11, 15], "economi": 5, "sake": 5, "util": [5, 7], "intens": [5, 7, 10, 11], "averag": [5, 10], "minut": [5, 7, 12, 13], "window": 5, "max": [5, 14], "percentag": 5, "less": [5, 15], "aka": [5, 8, 13], "messagesnotvis": 5, "whichev": 5, "linear": 5, "declin": 5, "total": [5, 10, 14], "equal": 5, "core": [5, 10], "sometim": [5, 14], "rapid": 5, "increas": [5, 7, 8, 11, 14, 15], "pictur": 5, "disk": [5, 7, 13], "rapidli": [5, 14], "caught": 5, "reboot": [5, 7], "lose": 5, "appear": 5, "loss": 5, "were": [5, 10, 12], "return": [5, 11, 15], "statu": 5, "rel": [5, 8], "slope": 5, "graph": 5, "discov": 5, "midwai": 5, "7": 5, "12": [5, 11], "greater": [5, 7], "fewer": [5, 14], "specif": [5, 6, 7, 8, 12, 15], "within": [5, 7, 10, 14], "plot": [5, 10], "its": [5, 6, 7, 12, 13], "ideal": 5, "softwar": [5, 6, 7, 8, 9, 10], "entri": [5, 11], "toggl": 5, "row": [5, 8, 11], "logstream": 5, "timescal": 5, "absolut": [5, 8], "upper": 5, "corner": 5, "screen": [5, 13], "zoom": 5, "particular": [5, 11, 14], "draw": 5, "box": 5, "itself": [5, 13, 14], "deselect": 5, "certain": [5, 12, 14, 15], "perman": 5, "simpli": [5, 8, 10, 11, 12], "click": [5, 12], "x": 5, "next": [5, 10, 12], "legend": 5, "hover": 5, "left": 5, "direct": 5, "arrow": 5, "icon": 5, "drag": 5, "drop": [5, 14], "lower": 5, "diagon": 5, "desir": [5, 15], "menu": 5, "refresh": 5, "amazon": [6, 9, 12], "web": [6, 9, 12, 13], "storag": [6, 9, 12], "system": [6, 8, 9, 15], "store": [6, 9], "cloud": [6, 8], "platform": [6, 9], "sourc": [6, 14], "oper": [6, 9, 14], "benefit": 6, "eas": 6, "themselv": [6, 7], "reproduc": 6, "result": [6, 10, 12, 13], "fix": [6, 14], "flexibl": 6, "demand": 6, "infrastructur": [6, 13], "access": [6, 9, 10, 14, 15], "far": 6, "institut": 6, "great": 6, "piec": 6, "ad": [6, 13, 15], "consum": 6, "confus": 6, "leverag": 6, "former": 6, "latter": 6, "essenti": [6, 11], "termin": [6, 9, 10, 12, 13], "program": [6, 12], "feel": [6, 12], "cimini": 6, "broad": 6, "cambridg": 6, "ma": 6, "usa": 6, "develop": 6, "now": [6, 13], "carpent": 6, "singh": 6, "repositori": [7, 10], "readm": 7, "respect": 7, "document": [7, 9, 12, 14], "overview": 7, "explain": 7, "python3": 7, "defin": 7, "gave": 7, "addition": [7, 13], "onto": [7, 10, 12, 13], "mismatch": [7, 14, 15], "accident": [7, 14], "intend": 7, "blindli": 7, "sit": 7, "idl": 7, "hook": 7, "_perinst": 7, "shut": [7, 13], "send": [7, 10, 11], "16xlarg": [7, 10], "250gb": 7, "ram": 7, "165": [7, 10], "eb": [7, 10, 14, 15], "volum": [7, 10, 12, 14, 15], "16": [7, 10], "10gb": 7, "space": [7, 10, 14], "assign": 7, "gb": [7, 10], "share": 7, "among": [7, 12], "384": [7, 14], "timelaps": 7, "movi": 7, "stagger": 7, "aren": 7, "simultan": 7, "likelihood": 7, "degre": 7, "trial": 7, "local": [7, 8, 9, 12, 14], "sens": [7, 14], "drive": [7, 9, 10], "fluctuat": 7, "choic": [7, 11], "quickli": [7, 10, 12, 14], "willing": [7, 10, 12], "oppos": [7, 10], "ones": [7, 10], "risk": [7, 13], "tweak": 7, "five": 7, "primari": 7, "interact": [7, 9], "prepar": 7, "outsid": 7, "would": [7, 8, 9, 10, 11, 13], "granular": 7, "tab": 7, "browser": 7, "watch": 7, "behavior": 7, "especi": 7, "split": 8, "unlik": 8, "inclus": 8, "NOT": [8, 11], "wish": [8, 12], "metdata": 8, "ye": 8, "enabl": [8, 9], "extract": [8, 11], "folder": [8, 10, 11, 14, 15], "present": [8, 12, 15], "remot": 8, "method": 8, "should": [8, 9, 10, 12, 13], "pars": [8, 10], "minimum": [8, 10], "pathname_": 8, "nameofchannel": 8, "filename_": 8, "column": [8, 11, 12, 14], "metadata_": [8, 14], "pieceofmetadata": 8, "pathnam": [8, 14], "relativepath": 8, "odd": 8, "yourself": [8, 11], "via": [8, 15], "favorit": [8, 11], "languag": [8, 11], "phenix": 8, "xml": 8, "pe2loaddata": [8, 14], "namesandtyp": 8, "written": [8, 9], "video": 8, "simpl": [8, 13], "eweisbar": 8, "desktop": 8, "data_fil": [8, 11], "run_batch_gener": [8, 14, 15], "stuff": 8, "bottom": 8, "argument": [8, 14], "makeanalysisjob": [8, 14], "unless": [8, 13, 14], "deviat": 8, "datafilepath": 8, "transit": 8, "h5": [8, 11, 14], "captur": 8, "togeth": [8, 10], "createbatchfil": [8, 11, 14], "map": 8, "root": [8, 12], "analyz": [8, 11], "button": 8, "batchpipenam": 8, "batchpath": 8, "format": [8, 11], "implement": 9, "destroi": 9, "creation": 9, "setup_aw": 9, "proce": 9, "login": 9, "secur": [9, 12], "credenti": 9, "safe": [9, 10], "later": 9, "ssh": 9, "probabl": 9, "d": [9, 10, 11], "rather": [9, 14, 15], "pair": [9, 12, 14], "chmod": 9, "600": 9, "privat": 9, "download": [9, 10, 12, 14, 15], "connect": [9, 14], "vpc": [9, 12], "subnet": [9, 12, 13], "inbound": 9, "ip": 9, "address": 9, "ecsinstancerol": 9, "permiss": 9, "coordin": 9, "grant": 9, "launch": [9, 10, 12], "topic": 9, "trigger": [9, 13, 14], "upload": [9, 14, 15], "block": 9, "link": [9, 12], "prefer": [9, 10], "dedic": 9, "simplic": 9, "special": 9, "micro": 9, "basic": 9, "recommend": [9, 10, 11, 12], "further": [9, 14], "guid": 9, "tool": [9, 11], "instruct": [9, 12, 13], "assum": [9, 12], "linux": [9, 12], "support": [9, 11, 15], "9": 9, "sudo": 9, "apt": 9, "git": [9, 10], "http": 9, "github": [9, 14], "com": [9, 14], "distributedsci": 9, "cd": 9, "interfac": [9, 12, 13], "main": 9, "awscli": 9, "ignor": 9, "six": 9, "upgrad": 9, "last": [9, 13, 14], "west": 9, "eu": 9, "2a": 9, "real": 9, "gotten": 9, "know": [9, 14], "replic": 9, "repeat": 9, "decid": [9, 11], "specifi": [10, 11, 14], "tie": 10, "uniqu": 10, "apart": [10, 12], "analys": 10, "nuclearsegmentation_drosophila": 10, "encapsul": 10, "prep": 10, "distinct": 10, "wrong": [10, 14], "nuclearsegmentation_hela": 10, "handi": [10, 12], "histori": [10, 12], "tracker": [10, 12], "immedi": [10, 12], "justifi": [10, 12], "temporari": 10, "associ": [10, 13], "s3f": [10, 14, 15], "occasion": 10, "crop": 10, "slower": 10, "advis": 10, "length": [10, 14], "due": [10, 11, 13, 14], "lack": [10, 15], "slightli": 10, "stall": [10, 13, 14], "sinc": 10, "exist": [10, 12, 14], "fact": 10, "proceed": [10, 14], "insensit": 10, "partwai": 10, "resubmit": 10, "whole": [10, 13, 14], "reprocess": [10, 14], "haven": 10, "succeed": 10, "vs": [10, 14], "rerun": 10, "determin": 10, "previous": [10, 13], "mark": 10, "byte": 10, "object": 10, "smaller": [10, 11, 14], "string": 10, "toward": 10, "extern": 10, "fetch": 10, "commit": 10, "checkout": 10, "pip": 10, "sample_distribut": 10, "cellprofiler_configuration_1": 10, "sample_dcp_config_1": 10, "fairli": 10, "4096": 10, "mb": 10, "cellprofiler_configuration_2": 10, "sample_dcp_config_2": 10, "tend": 10, "break": 11, "metadata": [11, 14, 15], "site": [11, 14, 15], "node": 11, "readi": [11, 12], "yourjobfil": 11, "loaddata": [11, 14], "OR": [11, 14], "headless": 11, "versu": 11, "load": [11, 14], "mechan": 11, "000": 11, "suffer": 11, "throughput": 11, "none": 11, "directori": [11, 14], "rule": 11, "flagimag": [11, 14], "scan": 11, "output_structur": [11, 15], "subfold": 11, "hyphen": [11, 15], "metadata_pl": [11, 14], "plate1": [11, 14], "metadata_wel": [11, 14], "a01": [11, 14], "output_top_directori": [11, 15], "append": 11, "sh": [11, 14], "gnu": 11, "combin": 11, "approach": 11, "uniform": 11, "96": 11, "echo": 11, "plate2": 11, "plate3": 11, "b": 11, "h": 11, "02": 11, "03": 11, "04": [11, 14], "05": 11, "06": 11, "07": 11, "08": 11, "09": 11, "11": [11, 14], "sort": 11, "variabl": [11, 14, 15], "besid": 11, "serv": 11, "shortcut": 11, "common": [11, 14], "regular": 11, "n": 11, "pathwai": 11, "comfort": 11, "faster": 11, "yourfleetfil": 12, "anywher": 12, "coupl": 12, "sever": 12, "app_namespotfleetrequestid": [12, 13], "walk": 12, "awai": 12, "ask": 12, "shortli": 12, "term": 12, "explan": 12, "cover": 12, "review": 12, "test": 12, "ami": 12, "obtain": 12, "arn": 12, "id": 12, "role": [12, 15], "iamfleetrol": 12, "iaminstanceprofil": 12, "keynam": [12, 14], "subnetid": 12, "did": 12, "templat": 12, "extens": [12, 14], "imageid": 12, "snapshotid": 12, "refer": [12, 14], "os": 12, "yourselv": 12, "good": 12, "had": 12, "pleas": [12, 14], "repo": [12, 14], "offici": 12, "deprec": 12, "strongli": 12, "validfrom": 12, "validto": 12, "year": 12, "targetcapac": 12, "align": 12, "step_1_configur": 12, "md": 12, "instancetyp": 12, "spotpric": 12, "search": 12, "kill": [12, 13], "network": [12, 13], "On": 12, "snapshot": 12, "els": 13, "label": 13, "statist": 13, "relat": 13, "consecut": 13, "almost": 13, "show": [13, 14], "soon": 13, "whatev": 13, "tmux": 13, "disconnect": 13, "critic": 13, "lambda": 13, "forc": 13, "24": 13, "rise": 13, "charg": 13, "over": [13, 15], "rid": 13, "final": 13, "multi": [13, 14], "inher": 13, "overal": 13, "alloc": 13, "normal": 13, "monitor_fleet_id": 13, "sfr": 13, "9999ef99": 13, "99fc": 13, "9d9d": 13, "9999": 13, "9999999e99ab": 13, "monitor_app_nam": 13, "2021_12_13_project_analysi": 13, "monitor_ecs_clust": 13, "monitor_queue_nam": 13, "2021_12_13_project_analysisqueu": 13, "monitor_bucket_nam": 13, "monitor_log_group_nam": 13, "monitor_start_tim": 13, "1649187798951": 13, "older": 13, "troubl": 13, "kept": 13, "solut": 14, "beyond": 14, "throw": 14, "bug": 14, "expected_number_of_fil": 14, "6": 14, "batch_data": 14, "uncheck": 14, "valueerror": 14, "dictionari": 14, "sequenc": 14, "element": 14, "syntax": 14, "consid": 14, "Or": 14, "patient": 14, "seen": 14, "sqs_queue_inform": 14, "invalid": 14, "routin": 14, "unrecover": 14, "No": 14, "extra": 14, "comma": 14, "somewher": 14, "invis": 14, "excel": 14, "panda": 14, "to_csv": 14, "pass": 14, "index": 14, "datafram": 14, "indexerror": 14, "bound": 14, "axi": 14, "lead": 14, "zero": 14, "ie": [14, 15], "metadata_sit": 14, "handl": [14, 15], "pad": 14, "batchfil": 14, "mistak": 14, "exporttospreadsheet": 14, "sub": 14, "nest": 14, "unusu": 14, "criteria": 14, "cppipe": 14, "outcom": 14, "typo": 14, "a1": 14, "attent": 14, "reflect": 14, "load_data": 14, "perinst": 14, "ioerror": 14, "indic": 14, "cannot": 14, "err": 14, "slowdown": 14, "putobject": 14, "retri": 14, "rate": 14, "preval": 14, "backlog": 14, "transport": 14, "endpoint": 14, "stochast": 14, "ssl": 14, "certif": 14, "subject": 14, "amazonaw": 14, "target": 14, "host": 14, "xxx": 14, "yyi": 14, "dot": 14, "bypass": [14, 15], "use_path_request_styl": 14, "silent": 14, "mito": 14, "miss": 14, "referenc": 14, "filenam": 14, "hint": 14, "field": 14, "mykeypair": 14, "examplefleet": 14, "With": 14, "examplejob_plateid": 14, "filterobject": 14, "saveimag": 14, "dockerhub": 15, "dcpversion_cellprofilervers": 15, "0_3": 15, "8": 15, "versionnumb": 15, "plugin": 15, "abil": 15, "boto": 15, "fabric": 15, "elimin": 15, "check_if_don": 15, "cheapli": 15, "slowli": 15, "launchdata": 15, "submiss": 15, "discount": 15, "compat": 15, "item": 15, "discuss": 15}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"aw": [0, 5, 7, 9, 10], "hygien": 0, "script": 0, "clean": 0, "out": [0, 12], "old": 0, "alarm": 0, "log": [0, 5, 10], "group": [0, 10], "sq": [1, 10], "queue": [1, 10, 13], "inform": [1, 10], "sqs_queue_nam": 1, "sqs_dead_letter_queu": 1, "sqs_message_vis": 1, "exampl": [1, 3, 10], "advanc": 2, "configur": [2, 3, 7, 9, 10, 11, 12], "dcp": [2, 8, 12], "chang": 2, "you": 2, "can": [2, 6], "make": 2, "distribut": [2, 4, 6, 7], "cellprofil": [2, 4, 6, 7], "outsid": 2, "docker": [2, 6, 10], "contain": 2, "requir": [2, 9], "your": [2, 11, 12, 13], "own": 2, "pipelin": 2, "us": [2, 6, 8, 13], "runcellpos": 2, "plugin": [2, 10], "config": [3, 10, 12], "py": [3, 11], "what": [4, 6, 7], "doe": [4, 7], "cost": 4, "cloudwatch": [5, 10], "dashboard": [5, 10], "fulfilledcapac": 5, "numberofmessagesreceiv": 5, "delet": 5, "memoryutil": 5, "messagesvis": 5, "notvis": 5, "distinct": 5, "all": 5, "show": 5, "error": 5, "interact": 5, "why": 6, "would": 6, "i": [6, 7], "want": 6, "thi": [6, 7, 9], "do": [6, 7], "need": 6, "have": 6, "run": [6, 7, 10, 12, 13], "contribut": 6, "code": 6, "who": 6, "made": 6, "happen": 7, "when": [7, 13], "an": 7, "instanc": [7, 10], "look": 7, "like": 7, "how": 7, "determin": 7, "my": 7, "pass": 8, "file": [8, 10, 11, 13], "metadata": 8, "load": 8, "data": 8, "creat": [8, 9], "loaddata": 8, "csv": 8, "batch": 8, "list": 8, "step": [9, 10, 11, 12, 13], "0": [9, 15], "prep": 9, "1": [9, 10, 12, 15], "manual": [9, 13], "resourc": 9, "2": [9, 11, 15], "automat": 9, "3": [9, 12], "auxiliari": 9, "4": [9, 13], "increas": 9, "spot": [9, 12], "limit": 9, "The": 9, "control": 9, "node": 9, "from": 9, "scratch": 9, "instal": 9, "python": 9, "8": 9, "higher": 9, "pip": 9, "clone": 9, "repositori": 9, "cli": 9, "s3f": 9, "fuse": 9, "option": 9, "ami": 9, "remov": 9, "long": 9, "term": 9, "infrastructur": 9, "role": 9, "lambda": 9, "monitor": [9, 10, 13], "sn": 9, "ec2": [9, 10], "compon": 10, "gener": 10, "set": 10, "AND": 10, "ec": 10, "environ": 10, "creation": 10, "redund": 10, "check": 10, "submit": 11, "job": 11, "overview": 11, "altern": 11, "submiss": 11, "run_batch_gener": 11, "start": 12, "cluster": 12, "fleet": 12, "request": 12, "paramet": 12, "must": 12, "current": 12, "version": [12, 15], "To": 12, "region": 12, "where": 12, "isn": 12, "t": 12, "avail": 12, "date": 12, "auto": 13, "function": 13, "while": 13, "analysi": 13, "total": 13, "empti": 13, "ar": 13, "visibl": 13, "Not": 13, "messag": 13, "cheapest": 13, "mode": 13, "troubleshoot": 14, "histori": 15, "forthcom": 15, "0rc2": 15, "releas": 15, "20201110": 15, "0rc1": 15, "20201105": 15, "20201103": 15, "20200109": 15, "updat": 15, "through": 15, "20191002": 15, "20181108": 15, "20170217": 15, "20170221": 15, "bugfix": 15, "20181018": 15, "20170213": 15}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 56}})