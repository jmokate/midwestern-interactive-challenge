--
-- PostgreSQL database dump
--

-- Dumped from database version 14.3
-- Dumped by pg_dump version 14.3

-- Started on 2022-06-07 18:06:08

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 210 (class 1259 OID 16396)
-- Name: form_submission; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.form_submission (
    id bigint NOT NULL,
    first_name character varying NOT NULL,
    last_name character varying NOT NULL,
    title character varying NOT NULL,
    email character varying NOT NULL,
    comments text
);


ALTER TABLE public.form_submission OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 16395)
-- Name: form_submission_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.form_submission_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.form_submission_id_seq OWNER TO postgres;

--
-- TOC entry 3320 (class 0 OID 0)
-- Dependencies: 209
-- Name: form_submission_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.form_submission_id_seq OWNED BY public.form_submission.id;


--
-- TOC entry 211 (class 1259 OID 16404)
-- Name: home; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.home (
    id bigint NOT NULL,
    page_id bigint NOT NULL,
    title character varying NOT NULL,
    content text NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    image bytea NOT NULL
);


ALTER TABLE public.home OWNER TO postgres;

--
-- TOC entry 3168 (class 2604 OID 16399)
-- Name: form_submission id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.form_submission ALTER COLUMN id SET DEFAULT nextval('public.form_submission_id_seq'::regclass);


--
-- TOC entry 3313 (class 0 OID 16396)
-- Dependencies: 210
-- Data for Name: form_submission; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.form_submission (id, first_name, last_name, title, email, comments) FROM stdin;
\.


--
-- TOC entry 3314 (class 0 OID 16404)
-- Dependencies: 211
-- Data for Name: home; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.home (id, page_id, title, content, created_at, updated_at, image) FROM stdin;
\.


--
-- TOC entry 3321 (class 0 OID 0)
-- Dependencies: 209
-- Name: form_submission_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.form_submission_id_seq', 1, false);


--
-- TOC entry 3170 (class 2606 OID 16401)
-- Name: form_submission form_submission_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.form_submission
    ADD CONSTRAINT form_submission_pkey PRIMARY KEY (id);


--
-- TOC entry 3172 (class 2606 OID 16410)
-- Name: home home_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.home
    ADD CONSTRAINT home_pkey PRIMARY KEY (id);


-- Completed on 2022-06-07 18:06:09

--
-- PostgreSQL database dump complete
--

